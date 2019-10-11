let preLoadImge = (imageList, curIndex, preLoadCount) => {
  if (imageList.length <= 1) return
  let img = new Image()
  let startIndex = curIndex - preLoadCount < 0 ? 0 : curIndex - 2
  let endIndex =
    curIndex + preLoadCount >= imageList.length
      ? imageList.length - 1
      : curIndex + preLoadCount
  img.onload = function() {
    imageList[startIndex]['loadIndex'] = true
    startIndex++
    nexSetImage()
  }
  nexSetImage()
  function nexSetImage() {
    if (startIndex > endIndex) return
    if (imageList[startIndex]['loadIndex']) {
      startIndex++
      nexSetImage()
      return
    }
    img.src = imageList[startIndex]['url']
  }
}

function setWH(el, w, h, p) {
  let parentNode = el.parentNode
  let parH = parentNode.offsetHeight,
    parW = parentNode.offsetWidth
  let pW = w / parW,
    pH = h / parH
  let width, height
  if (pW < 1 && pH < 1) {
    width = w
    height = h
  } else if (pW < pH) {
    (height = parH), (width = parH / p)
  } else if (pW > pH) {
    (width = parW), (height = parW * p)
  }
  el.style.width = width + 'px'
  el.style.height = height + 'px'
}

function IncreaseDecrease(el, direct, p, e, proportion) {
  proportion = proportion || 15
  if (direct > 0) {
    el.style.width = el.width + proportion + 'px'
    el.style.height = el.width * p + 'px'
  } else {
    el.style.width = el.width - proportion + 'px'
    el.style.height = el.width * p + 'px'
  }
}

function scrollFunc(e) {
  var direct = 0
  e = e || window.event
  if (e.wheelDelta) {
    //判断浏览器IE，谷歌滑轮事件
    if (e.wheelDelta > 0) {
      //当滑轮向上滚动时
      direct = 1
    }
    if (e.wheelDelta < 0) {
      //当滑轮向下滚动时
      direct = -1
    }
  } else if (e.detail) {
    //Firefox滑轮事件
    if (e.detail > 0) {
      //当滑轮向上滚动时
      direct = 1
    }
    if (e.detail < 0) {
      //当滑轮向下滚动时
      direct = -1
    }
  }
  return direct
}

let directive = {
  view: function(el, binding) {
    let image = binding.value
    if (JSON.stringify(image) == '{}') return
    el.src = image.url
    if (el.isHasBind) return
    el.isHasBind = true
    el.onload = function() {
      el.p = el.naturalHeight / el.naturalWidth
      setWH(el, el.naturalWidth, el.naturalHeight, el.p)
      if (window.addEventListener) {
        el.addEventListener(
          'mousewheel',
          function(e) {
            e = e || window.event
            let direct = scrollFunc(e)
            requestAnimationFrame(() => {
              IncreaseDecrease(el, direct, el.p, e)
            })
          },
          {
            passive: false
          }
        )
      }
    }
  },
  drag: function(el) {
    if (el.drag) return
    el.drag = true
    el.onmousedown = function(ev) {
      ev = ev || window.event
      ev.preventDefault()
      var disX = ev.clientX - el.offsetLeft
      var disY = ev.clientY - el.offsetTop

      document.onmousemove = function(ev) {
        ev = ev || window.event
        ev.preventDefault()
        var l = ev.clientX - disX
        var t = ev.clientY - disY
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
      document.onmouseup = function() {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },
  rotate: function(el, binding) {
    el.rotate = binding.value.rotate || 0
    el.style.transform = 'translate(-50%, -50%) rotate(' + el.rotate + 'deg)'
    el.style['-webkit-transform'] =
      'translate(-50%, -50%) rotate(' + el.rotate + 'deg)'
    el.style['-moz-transform'] =
      'translate(-50%, -50%) rotate(' + el.rotate + 'deg)'
    el.style['-o-transform'] =
      'translate(-50%, -50%) rotate(' + el.rotate + 'deg)'
    el.style['transform'] = 'translate(-50%, -50%) rotate(' + el.rotate + 'deg)'
    binding.value.callBack && binding.value.callBack(el.rotate)
  }
}

export { preLoadImge, directive }
