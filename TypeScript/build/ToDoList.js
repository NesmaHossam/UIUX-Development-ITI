"use strict";
const input = document.querySelector("input");
const add = document.querySelector("#add");
const list = document.querySelector("ul");
add.addEventListener("click", function () {
    if (input.value.trim() === "") {
        document.write("Please enter a text.");
        return;
    }
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    li.textContent = input.value;
    input.value = "";
    deleteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";
    deleteBtn.classList.add("delete");
    editBtn.classList.add("edit");
    deleteBtn.addEventListener("click", function () {
        list.removeChild(li);
    });
    editBtn.addEventListener("click", function () {
        if (li.textContent) {
            input.value = li.textContent.replace("DeleteEdit", "").trim();
        }
        list.removeChild(li);
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("save");
        saveBtn.addEventListener("click", function () {
            if (input.value.trim() !== "") {
                li.textContent = input.value;
                li.appendChild(deleteBtn);
                li.appendChild(editBtn);
                input.value = "";
                list.appendChild(li);
                saveBtn.remove();
            }
            else {
                document.write("Please enter a text.");
            }
        });
        li.appendChild(saveBtn);
        list.appendChild(li);
    });
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
});
