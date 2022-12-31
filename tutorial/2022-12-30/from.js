/* <input type="text" placeholder="name">
    <input type="text" placeholder="age">
    <input type="text" placeholder="gender">
    <button id="btn">Submit</button>
    <script src="./from.js"></script>
    */

import { writeToDB } from "./FB_DB.js";

$("#btn").click(function () {
    var name = $("input[placeholder='name']").val();
    var age = $("input[placeholder='age']").val();
    var gender = $("input[placeholder='gender']").val();
    var data = {
        name: name,
        age: age,
        gender: gender
    }
    console.log(data);
    writeToDB(data);
})
