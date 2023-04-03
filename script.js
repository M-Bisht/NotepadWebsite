const add_note_button = document.querySelector(".add-note-button");

add_note_button.addEventListener("click", function add_div_in_body() {
  const create_div = document.createElement("div");
  create_div.classList.add("main-note-div");

  const div_html_data = `
    <div class="button-div">
        <button id="note-button-edit"><i class="fa-solid fa-pen-to-square note-buttons"></i></button>
         <button id="note-button-save"><i class="fa-solid fa-check-double note-buttons"></i></button>
         <button id="note-button-delete"><i class="fa-solid fa-trash note-buttons"></i></button>
    </div>
    <textarea name="note-textarea" id="note-textarea" class="writing"></textarea>`;

  create_div.insertAdjacentHTML("afterbegin", div_html_data);
  document.body.appendChild(create_div);

  const edit_button = create_div.querySelector("#note-button-edit");
  const save_button = create_div.querySelector("#note-button-save");
  const delete_button = create_div.querySelector("#note-button-delete");
  const textarea = create_div.querySelector("#note-textarea");
  const writing = create_div.querySelector(".writing");

  delete_button.addEventListener("click", () => create_div.remove());

  edit_button.addEventListener("click", () => {
    writing.classList.remove("writing");
    textarea.style.backgroundColor = "#DCD7C9";
  });

  save_button.addEventListener("click", () => {
    writing.classList.add("writing");
    textarea.style.backgroundColor = "#00fb3242";
  });

  textarea.addEventListener("change", (event) => {
    let save_value = event.target.value;

    function save_in_array() {
      let all_div = document.querySelectorAll("#note-textarea");
      let note_array = [];
      all_div.forEach((create_div) => note_array.push(create_div.value));

      localStorage.setItem("note_array", JSON.stringify(note_array));

      let get_data = JSON.parse(localStorage.getItem("note_array"));

      if (note_array == true) {
        get_data.forEach(create_div);
      } /* error in this line get data */
    }
    save_in_array();
  });
});
