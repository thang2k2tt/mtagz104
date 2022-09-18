function Show() {
    const element = document.getElementById("mytext");
    if (document.getElementById("myform").classList.toggle("show")) {
      document.getElementById("myform").style.display = "block";
    } else {
      document.getElementById("myform").style.display = "none";
    }
  }
  function Film() {
    const element = document.getElementById("myflim");
    if (document.getElementById("myform1").classList.toggle("show")) {
      document.getElementById("myform1").style.display = "block";
    } else {
      document.getElementById("myform1").style.display = "none";
    }
  }
  function Music() {
    const element = document.getElementById("mymusic");
    if (document.getElementById("myform2").classList.toggle("show")) {
      document.getElementById("myform2").style.display = "block";
    } else {
      document.getElementById("myform2").style.display = "none";
    }
  }

  function Award() {
    const element = document.getElementById("myaward");
    if (document.getElementById("myform3").classList.toggle("show")) {
      document.getElementById("myform3").style.display = "block";
    } else {
      document.getElementById("myform3").style.display = "none";
    }
  }
