import router from "vue-router"
export const toback = {
    bind(el, binding) {

        let x = 0;
        let y = 0;

        el.ontouchstart = function (e) {
            x = e.changedTouches[0].clientX
            y = e.changedTouches[0].clientY
        }

        el.ontouchend = function (e) {
            x = e.changedTouches[0].clientX - x
            y = e.changedTouches[0].clientY - y

            if (y < 100 && x > 150) {

                console.log(11111)
                // console.log($router)
                // el.$router.go(-1);
                console.log(binding)
             



                // if (y < 100) {
                //     div.style.height = y + "px"
                //     // div.style.lineHeight = y + "px"
                // } else {
                //     div.style.height = 100 + "px"
                //     // div.style.lineHeight = 100 + "px"
                // }
                // el.insertBefore(div, el.children[0])
            }
            // x = e.changedTouches[0].clientX - x
            // y = e.changedTouches[0].clientY - y
            // div.style.height = 0
            // div.innerText = "下拉刷新"
            // div.style.transition = "all 0.5s"
        }
    },
};


// el.ontouchmove = function (e) {
//     x = e.changedTouches[0].clientX - x
//     y = e.changedTouches[0].clientY - y
//     div.innerText = "松开即可刷新"
//     if (y > 0 && x < 50) {
//         if (y < 100) {
//             div.style.height = y + "px"
//             // div.style.lineHeight = y + "px"
//         } else {
//             div.style.height = 100 + "px"
//             // div.style.lineHeight = 100 + "px"
//         }
//         el.insertBefore(div, el.children[0])
//     }
// }