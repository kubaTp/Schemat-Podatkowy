turnAlert = (on) => {
    const alertEl = document.getElementById("alert");

    if(on === true)
    {
        // usunac wszystkie inne
        document.getElementById("schematTransgraniczny").style.display = "none";
        document.getElementById("3").style.display                     = "none";
        document.getElementById("4_1").style.display                   = "none";
        document.getElementById("4_2").style.display                   = "none";
        document.getElementById("4_3").style.display                   = "none";
        document.getElementById("4prim").style.display                 = "none";
        document.getElementById("42prim").style.display                = "none";
        document.getElementById("schematTransgraniczny").style.display = "none";
        alertEl.style.display = "flex";
    }
    else
    {
        alertEl.style.display = "none";
    }
    
}

turnPositiveAlert = (on) => {
    const alertEl = document.getElementById("alertPositive");

    if(on === true)
    {
        // usunac wszystkie inne
        document.getElementById("3").style.display                     = "none";
        document.getElementById("schematTransgraniczny").style.display = "none";
        document.getElementById("4_1").style.display                   = "none";
        document.getElementById("4_2").style.display                   = "none";
        document.getElementById("4_3").style.display                   = "none";
        document.getElementById("4prim").style.display                 = "none";
        document.getElementById("42prim").style.display                = "none";
        document.getElementById("schematTransgraniczny").style.display = "none";

        alertEl.style.display = "flex";
    }
    else
    {
        alertEl.style.display = "none";
    }
}

turnNextElement = (id, on) => {
    if(on === true)
        document.getElementById(id).style.display = "flex";
    else
        document.getElementById(id).style.display = "none";
}

schematStandarowy = (el) => {
    var value = el.value;
    console.log(value);

    if(value == "Nie")
    {
        turnAlert(false);
        document.getElementById("schematTransgraniczny").style.display = "flex";
    }
    else
    {
        turnAlert(true);
        document.getElementById("schematTransgraniczny").style.display = "none";

    }
}

schematTransgraniczny = (el) => {
    var value = el.value;


    if(value == "Tak")
    {
        document.getElementById("4_1").style.display = "flex";
        document.getElementById("3").style.display = "none";
    }
    else
    {
        document.getElementById("4_1").style.display = "none";
        document.getElementById("4_2").style.display = "none";
        document.getElementById("4_3").style.display = "none";
        document.getElementById("3").style.display = "flex";
    }
}

cztery_1 = (el) => {
    const value = el.value;

    if(value == "Tak")
    {
        //turnAlert(false);
        turnNextElement("4prim", false);
        document.getElementById("4_2").style.display = "flex";
    }
    if(value == "Nie")
    {
        // tu 4prim
        turnNextElement("4prim", true);
        el.checked = false;
    }
}

cztery_2 = (form) => {
    const checkboxes   = form.getElementsByTagName("input");
    const nextEl       = document.getElementById("4_3");

    var areAllChecked = true;
    var buf = 0;
    for(var i = 0; i < checkboxes.length; i++)
    {
        if(!checkboxes[i].checked)
        {
            areAllChecked = false;
            buf++;
        }
    }

    if(areAllChecked)
    {
        nextEl.style.display = "flex";

        turnNextElement("4prim", false);
    }
    else
    {
        nextEl.style.display = "none";

        turnNextElement("4prim", true);
    }

    return false;
}

cztery_3 = (el) => {
    if(el.value != "Nie") // next el
    {
        turnAlert(false);
        turnPositiveAlert(true);
    }
    else 
    {
        // tu 4prim
        turnAlert(true);
    }
}

czteryPrim = (el) => {
    if(el.value != "Nie")
    {
        turnPositiveAlert(true);
    }
    else
    {
        turnNextElement("42prim", true);
    }
}

czteryDwaPrim = (el) => {
    if(el.value != "Nie")
    {
        turnPositiveAlert(true);
    }
    else
    {
        turnAlert(true);
    }
}
trzy = (el) => {
    if(el.value == "Tak")
    {
        document.getElementById("4_1").style.display = "flex";
        turnAlert(false);
    }
    else
    {
        document.getElementById("3").style.display = "none";
        document.getElementById("4_1").style.display = "none";
        turnAlert(true);
        el.checked = false;
    }

}

refresh = (id) => {
    document.getElementById(id).style.display = "none";
    const initForm = document.getElementById("initForm");

    for(var i = 0; i < initForm.elements.length; i++)
    {
        initForm.elements[i].checked = false;
    }   
}

addEvent = (element, eventName, fn) => {
if (element.addEventListener)
    element.addEventListener(eventName, fn, false);
else if (element.attachEvent)
    element.attachEvent('on' + eventName, fn);
}

/*
addEvent(window, 'load', setInterval(() => {
    const alertEl = document.getElementById("alert");
    var opacity = parseInt(getComputedStyle(alertEl).getPropertyValue("opacity"));

    if(opacity > 0)
    {
        alertEl.style.opacity = "0";
    }
    else
    {
        alertEl.style.opacity = "1";
    }
}, 1000));*/