import {computed} from "vue";

export function isValantineDayComp() {
    return computed(() => {
        const date = new Date(Date.now());
        return date.getDate() === 14 && date.getMonth() === 1;
    });
}