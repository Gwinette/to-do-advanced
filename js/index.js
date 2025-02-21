window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert("Введите текст задачи в строку");
            return;
        }
        const task_el = document.createElement('div');
        task_el.classList.add("task");

        const task_image_el = document.createElement("span");
        task_image_el.classList.add("span");
        task_image_el.innerHTML = '&#9744;';
        task_el.appendChild(task_image_el);

        const task_content_el = document.createElement("li");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "";
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "удалить";
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);
        input.value = "";

        task_input_el.addEventListener('dblclick', () => {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = 'сохранить';
            task_edit_el.style.opacity = '1';
        })
        task_edit_el.addEventListener('click', () => {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText = '';
            task_edit_el.style.opacity = '0';
        })

        task_image_el.addEventListener('click', () => {
            task_content_el.classList.toggle("checked");
            if (task_image_el.innerHTML == '☐') {
                task_image_el.innerHTML = '&#9745;';
            } else {
                task_image_el.innerHTML = '&#9744;';
            }
        })

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })
    })
})