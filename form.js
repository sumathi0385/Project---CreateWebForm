const rowdiv = document.createElement("div");
rowdiv.setAttribute("class", "row");
document.body.append(rowdiv);

const coldiv1 = document.createElement("div");
coldiv1.setAttribute("class", "column left");
rowdiv.appendChild(coldiv1);

const coldiv2 = document.createElement("div");
coldiv2.setAttribute("class", "column right");
rowdiv.appendChild(coldiv2);

const form1 = document.createElement("form");
form1.setAttribute("id", "myForm");
form1.setAttribute("onsubmit", "submitData(event)");
form1.setAttribute("method", "get");
coldiv1.appendChild(form1);

//Form Heading
var heading = document.createElement("h5")
heading.innerText = "User Details"
form1.appendChild(heading)

//First name
const div1 = document.createElement("div");
div1.setAttribute("class", "mb-2");
form1.appendChild(div1);

const fnamelbl = document.createElement("label");
fnamelbl.innerText = "First Name: ";
fnamelbl.style.fontWeight = "Bold"
fnamelbl.setAttribute("for", "fname");
fnamelbl.setAttribute("class", "form-label");
div1.appendChild(fnamelbl);

const fname = document.createElement("input");
fname.setAttribute("id", "fname");
fname.setAttribute("type", "text");
fname.setAttribute("value", "");
fname.setAttribute("class", "form-control");
div1.appendChild(fname);

//Last name
const div2 = document.createElement("div");
div2.setAttribute("class", "mb-2");
form1.appendChild(div2);

const lnamelbl = document.createElement("label");
lnamelbl.innerText = "Last Name: ";
lnamelbl.style.fontWeight = "Bold"
lnamelbl.setAttribute("for", "lname");
div2.appendChild(lnamelbl);

const lname = document.createElement("input");
lname.setAttribute("id", "lname");
lname.setAttribute("class", "form-control");
div2.appendChild(lname);

//Pin code
const div3 = document.createElement("div");
div3.setAttribute("class", "mb-2");
form1.appendChild(div3);

const pincodelbl = document.createElement("label");
pincodelbl.innerText = "Pin Code: ";
pincodelbl.style.fontWeight = "Bold"
pincodelbl.setAttribute("for", "pincode")

div3.appendChild(pincodelbl)

const pincode = document.createElement("input");
pincode.setAttribute("id", "pincode");
pincode.setAttribute("class", "form-control");
div3.appendChild(pincode);

//State
const div4 = document.createElement("div");
div4.setAttribute("class", "mb-2");
form1.appendChild(div4);

const statelbl = document.createElement("label");
statelbl.innerText = "State: ";
statelbl.style.fontWeight = "Bold"
statelbl.setAttribute("for", "state")
div4.appendChild(statelbl);

const state = document.createElement("input");
state.setAttribute("id", "state");
state.setAttribute("class", "form-control");
div4.appendChild(state);

//Gender
const div5 = document.createElement("div");
div5.setAttribute("class", "mb-2");
form1.appendChild(div5);

const genderlbl = document.createElement("label");
genderlbl.innerText = "Gender: ";
genderlbl.style.fontWeight = "Bold"
div5.appendChild(genderlbl);

const maleradio = document.createElement("input");
maleradio.setAttribute("type", "radio");
maleradio.setAttribute("id", "mradio");
maleradio.setAttribute("name", "radiogroup");
maleradio.setAttribute("class", "form-check-input");
maleradio.setAttribute("value", "male")
maleradio.setAttribute("checked", "")
div5.appendChild(maleradio);

const malelbl = document.createElement("label");
malelbl.innerText = "Male";
malelbl.setAttribute("for","mradio" )

div5.appendChild(malelbl);

const femaleradio = document.createElement("input");
femaleradio.setAttribute("type", "radio");
femaleradio.setAttribute("id", "fradio");
femaleradio.setAttribute("name", "radiogroup");
femaleradio.setAttribute("class", "form-check-input");
femaleradio.setAttribute("value", "female")
div5.appendChild(femaleradio);

const femalelbl = document.createElement("label");
femalelbl.innerText = "Female ";
femalelbl.setAttribute("for","fradio" )
div5.appendChild(femalelbl);

//Address
const div6 = document.createElement("div");
div6.setAttribute("class", "mb-2");
form1.appendChild(div6);

const addresslbl = document.createElement("label");
addresslbl.innerText = "Address:  ";
addresslbl.style.fontWeight = "Bold"
addresslbl.setAttribute("for", "address");
div6.appendChild(addresslbl);

const address = document.createElement("textarea");
address.setAttribute("type", "text");
address.setAttribute("id", "address");
address.setAttribute("class", "form-control");
div6.appendChild(address);

//Food

const div7 = document.createElement("div");
div7.setAttribute("class", "mb-2");
form1.appendChild(div7);

const foodlbl = document.createElement("label");
foodlbl.innerText = "Food: ";
foodlbl.style.fontWeight = "Bold"
div7.appendChild(foodlbl);

const food1 = document.createElement("input");
food1.setAttribute("type", "checkbox");
food1.setAttribute("id", "food1");
food1.setAttribute("class", "form-check-input")
food1.setAttribute("value", "South Indian")
div7.appendChild(food1);

const food1lbl = document.createElement("label");
food1lbl.innerText = "South Indian  ";
food1lbl.setAttribute("for", "food1")
food1lbl.setAttribute("class", "checklabel")
div7.appendChild(food1lbl);

const food2 = document.createElement("input");
food2.setAttribute("type", "checkbox");
food2.setAttribute("id", "food2");
food2.setAttribute("class", "form-check-input")
food2.setAttribute("value", "North Indian")
div7.appendChild(food2);

const food2lbl = document.createElement("label");
food2lbl.innerText = "North Indian";
food2lbl.setAttribute("for", "food2")
food2lbl.setAttribute("class", "checklabel")
div7.appendChild(food2lbl);

const food3 = document.createElement("input");
food3.setAttribute("type", "checkbox");
food3.setAttribute("id", "food3");
food3.setAttribute("class", "form-check-input")
food3.setAttribute("value", "Chinese")
div7.appendChild(food3);

const food3lbl = document.createElement("label");
food3lbl.innerText = "Chinese";
food3lbl.setAttribute("for", "food3")
food3lbl.setAttribute("class", "checklabel")
div7.appendChild(food3lbl);

const food4 = document.createElement("input");
food4.setAttribute("type", "checkbox");
food4.setAttribute("id", "food4");
food4.setAttribute("class", "form-check-input")
food4.setAttribute("value", "Italian")
div7.appendChild(food4);

const food4lbl = document.createElement("label");
food4lbl.innerText = "Italian";
food4lbl.setAttribute("for", "food4")
food4lbl.setAttribute("class", "checklabel")
div7.appendChild(food4lbl);

const food5 = document.createElement("input");
food5.setAttribute("type", "checkbox");
food5.setAttribute("id", "food5");
food5.setAttribute("class", "form-check-input")
food5.setAttribute("value", "Mexican")
div7.appendChild(food5);

const food5lbl = document.createElement("label");
food5lbl.innerText = "Mexican";
food5lbl.setAttribute("for", "food5")
food5lbl.setAttribute("class", "checklabel")
div7.appendChild(food5lbl);

//country
const div8 = document.createElement("div");
div8.setAttribute("class", "mb-2");
form1.appendChild(div8);

const countrylbl = document.createElement("label");
countrylbl.innerText = "Country: ";
countrylbl.style.fontWeight = "Bold"
countrylbl.setAttribute("for", "country")
div8.appendChild(countrylbl);

const country = document.createElement("select");
country.setAttribute("name", "country option"); 
country.setAttribute("id", "country")
div8.appendChild(country);

const option1 = document.createElement("option");
option1.innerText = "Select"
country.appendChild(option1)

const option2 = document.createElement("option");
option2.innerText = "India"
country.appendChild(option2)

const option3 = document.createElement("option");
option3.innerText = "China"
country.appendChild(option3)

//Submit button
const div9 = document.createElement("div");
div9.setAttribute("class", "mb-2");
form1.appendChild(div9);

const submitbtn = document.createElement("button");
submitbtn.innerText = "Submit";
submitbtn.setAttribute("id", "submit")
submitbtn.setAttribute("type", "submit")
div9.appendChild(submitbtn);



//Table Heading
var thead = document.createElement("h5")
thead.innerText = "User Details"
coldiv2.appendChild(thead)

// This is for table
const table1 = document.createElement("table");
coldiv2.appendChild(table1);

const tabHead = document.createElement("thead");
table1.appendChild(tabHead);

const tr1 = document.createElement("tr");
tabHead.appendChild(tr1);

const th1 = document.createElement("th");
th1.innerText = "First Name"
tr1.appendChild(th1);

const th2 = document.createElement("th");
th2.innerText = "Last Name"
tr1.appendChild(th2);

const th3 = document.createElement("th");
th3.innerText = "Pin Code"
tr1.appendChild(th3);

const th4 = document.createElement("th");
th4.innerText = "State"
tr1.appendChild(th4);

const th5 = document.createElement("th");
th5.innerText = "Gender"
tr1.appendChild(th5);

const th6 = document.createElement("th");
th6.innerText = "Address"
tr1.appendChild(th6);

const th7 = document.createElement("th");
th7.innerText = "Food"
tr1.appendChild(th7);

const th8 = document.createElement("th");
th8.innerText = "Country"
tr1.appendChild(th8);

const tabbody = document.createElement("tbody");
tabbody.setAttribute("id", "tab-body")
table1.appendChild(tabbody);

// const tr2 = document.createElement("tr");

// tabbody.appendChild(tr2)




function submitData(event){

    event.preventDefault();
    
    var array = [];

    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')

    if(checkboxes.length < 2){
        alert("Select atleast any 2 food value")
    }else{

        var tabbody = document.getElementById("tab-body");
        var row = tabbody.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

    
        var first_name = document.getElementById("fname").value;
        var last_name = document.getElementById("lname").value;
        var pin_code = document.getElementById("pincode").value;
        var state = document.getElementById("state").value;
    
        var address = document.getElementById("address").value;
        var country = document.getElementById("country").value;


        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        cell1.innerText = first_name;
        cell2.innerText = last_name;
        cell3.innerText = pin_code;
        cell4.innerText = state;    
        cell6.innerText = address;

        cell8.innerText = country;

        cell7.innerText = array.toString()

        var genderele = document.querySelectorAll('input[type="radio"')

        for(i = 0; i < genderele.length; i++) {
            if(genderele[i].checked){
               console.log(genderele[i].value)
   
            cell5.innerText = genderele[i].value;
           }
        }
        form1.reset()
    }

    

}


    

    


    


    












