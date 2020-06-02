export const redraw = {
    bind(el, binding) {
        let div = document.createElement("div")
        // let span = document.createElement("span")
        // div.appendChild(span)
        div.style.textAlign = 'center'
        let x = 0;
        let y = 0;
        div.style.lineHeight = 40 + "px"
        el.ontouchstart = function (e) {
            x = e.changedTouches[0].clientX
            y = e.changedTouches[0].clientY
        }
        el.ontouchmove = function (e) {
            x = e.changedTouches[0].clientX - x
            y = e.changedTouches[0].clientY - y
            div.innerText = "松开即可刷新"
            if (y >50  && x < 50) {
                if (y < 100) {
                    div.style.height = y + "px"
                    // div.style.lineHeight = y + "px"
                } else {
                    div.style.height = 100 + "px"
                    // div.style.lineHeight = 100 + "px"
                }
                el.insertBefore(div, el.children[0])
            }
        }
        el.ontouchend = function (e) {
            x = e.changedTouches[0].clientX - x
            y = e.changedTouches[0].clientY - y
            div.style.height = 0
            div.innerText = "下拉刷新"
            div.style.transition = "all 0.5s"
            // el.remove(div)
        }

    },
    inserted(el, binding) {
        // console.log('inserted');

        // el.style.color = binding.value;
    },
    update(el, binding) {
        // el.style.color = binding.value;
    },
    unbind() {
        // console.log('unbind');
    }
};
