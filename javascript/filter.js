/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.getElementById1("myDropdown").classList.toggle("show");
}

function filterFunction1() {
  var input, filter, ul, li, a, i;
  input = document.getElementById1("myInput");
  filter = input.value.toUpperCase1();
  div = document.getElementById1("myDropdown");
  a = div.getElementsByTagName1("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase1().indexOf1(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function myFunction2() {
  document.getElementById2("myDropdown").classList.toggle("show");
}
function filterFunction2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById2("myInput");
  filter = input.value.toUpperCase2();
  div = document.getElementById2("myDropdown");
  a = div.getElementsByTagName2("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase2().indexOf2(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function myFunction3() {
  document.getElementById3("myDropdown").classList.toggle("show");
}
function filterFunction3() {
  var input, filter, ul, li, a, i;
  input = document.getElementById3("myInput");
  filter = input.value.toUpperCase3();
  div = document.getElementById3("myDropdown");
  a = div.getElementsByTagName3("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase3().indexOf3(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}