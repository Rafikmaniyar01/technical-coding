// Total no of class = 250
let total_class = 250;
// Total no of class Attended by the Student = 150 (default)
let total_class_attended = prompt(
  "Total No of Class Attended by the Student:-",
  150
);
// Medical condition = 'N' (default)
let medical_condition = prompt("Medical Cause or Not ( 'Y' or 'N')", "N");

if (medical_condition !== "y") {
  if ((output = total_class_attended / total_class) > 0.75) {
    document.getElementById("output").innerHTML = true;
  } else {
    document.getElementById("output").innerHTML = false;
  }
} else {
  if ((output = total_class_attended / total_class) > 0.6) {
    document.getElementById("output").innerHTML = true;
  } else {
    document.getElementById("output").innerHTML = false;
  }
}

document.getElementById("input_t_c").innerHTML = total_class;
document.getElementById("input_t_c_a").innerHTML = total_class_attended;
document.getElementById("input_m_c").innerHTML = medical_condition.toUpperCase();