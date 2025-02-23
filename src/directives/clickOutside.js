export default {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function(event) {
            // Проверяем, что клик был вне элемента и его потомков
            console.log(!(el == event.target || el.contains(event.target)));
            if (!(el == event.target || el.contains(event.target))) {
                // Вызываем переданную функцию

                binding.value(event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    },
};