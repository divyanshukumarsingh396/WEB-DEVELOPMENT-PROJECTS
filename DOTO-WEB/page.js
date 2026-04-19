let btn = document.querySelector("#btn");

        btn.addEventListener("click", function() {

            let input = document.querySelector("#task");
         let task = input.value;

            if (task === "") {
                alert("Please enter task");
                 return;
            }

               let li = document.createElement("li");
            li.innerText = task;


     let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

          
            deleteBtn.addEventListener("click", function() {
                li.remove();
            });

li.appendChild(deleteBtn);

            document.querySelector("#tasklist").appendChild(li);

              input.value = "";
    });