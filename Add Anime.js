// flags
var nameFlag = false;
var franchiseFlag = false;
var rel_na = true;
var type_na = true;

// comparison variables
var setName = "";
var setAlt = [];
var setFranchise = "";
var fillerRatio = 0;
var fillerRating = "Nil";

// add name tag
var addNameTag = function (name) {
    // CASE 1 : Name provided and no name tag exists
    // TO DO : Add a name tag and set nameFlag
    if (name != "" && !nameFlag) {
        setName = name;

        // convert name to name tag
        var nameTag = name.toLowerCase().replace(/[&\/\\#,+()$~%.'":;*?<>{}^]/g, " ").replace(/-/g, " ")
            .replace(/ +$/, "").replace(/  +/g, " ").split(" ").join("_");

        // add name tag to tag repository
        // create name-tag-li
        var node = document.createElement("LI");
        var textNode = document.createTextNode(nameTag);
        node.appendChild(textNode);
        node.id = "name_tag_li";
        node.classList.add("name_tag");
        node.title = name + " (Name Tag)";
        // add remove option to name-tag-li
        var span = document.createElement("SPAN");
        var cross = document.createTextNode("\u00D7");
        span.appendChild(cross);
        span.id = "remove_name_tag_li";
        span.classList.add("remove");
        node.appendChild(span);
        // add name-tag-li to tag repository
        document.getElementById("tags").appendChild(node);

        // set nameFlag
        nameFlag = true;

        // set tags in order
        checkOrder();

        // set focus to next field
        document.getElementById("name").blur();

        // remove name tag
        span.onclick = function () {
            node.parentNode.removeChild(node);

            // reset nameFlag
            nameFlag = false;

            // set all tags in order
            checkOrder();

            // set focus to name field
            document.getElementById("name").focus();
        }
    }

    // CASE 2 : Name provided, name tag exists and given name is different from name tag
    // TO DO : Replace existing name with new value
    else if (name != "" && nameFlag && setName != name) {
        setName = name;

        // remove existing name tag
        var delNode = document.getElementById("name_tag_li");
        delNode.parentNode.removeChild(delNode);

        // convert name to name tag
        var nameTag = name.toLowerCase().replace(/[&\/\\#,+()$~%.'":;*?<>{}^]/g, " ").replace(/-/g, " ")
            .replace(/ +$/, "").replace(/  +/g, " ").split(" ").join("_");

        // add name tag to tag repository
        // create name-tag-li
        var node = document.createElement("LI");
        var textNode = document.createTextNode(nameTag);
        node.appendChild(textNode);
        node.id = "name_tag_li";
        node.classList.add("name_tag");
        node.title = name + " (Name Tag)";
        // add remove option to name-tag-li
        var span = document.createElement("SPAN");
        var cross = document.createTextNode("\u00D7");
        span.appendChild(cross);
        span.id = "remove_name_tag_li";
        span.classList.add("remove");
        node.appendChild(span);
        // add name-tag-li to tag repository
        document.getElementById("tags").appendChild(node);

        // set nameFlag
        nameFlag = true;

        // set tags in order
        checkOrder();

        // set focus to next field
        document.getElementById("name").blur();
        document.getElementById("altname").focus();

        // remove name tag
        span.onclick = function () {
            node.parentNode.removeChild(node);

            // reset nameFlag
            nameFlag = false;

            // set all tags in order
            checkOrder();

            // set focus to name field
            document.getElementById("name").focus();
        }
    }

    // CASE 3 : No name provided but name flag exists
    // TO DO : Remove existing name
    else if (name == "" && nameFlag) {
        setName = "";

        // remove existing name tag
        var delNode = document.getElementById("name_tag_li");
        delNode.parentNode.removeChild(delNode);

        // reset name flag
        nameFlag = false;

        // set all tags in order
        checkOrder();
    }
}

// check name validity
var checkValidName = function (name) {
    if (name != "") {
        document.getElementById("altname").focus();
    } else {
        // window.alert("Please enter a valid name! The name field cannot be empty!");
        document.getElementById("name").focus();
    }
}

// add alternate tags
var addAlternateTag = function (alternate) {
    // CASE 1 : New alternate name provided
    // TO DO : Add alternate tag
    if (alternate != "" && (setAlt.indexOf(alternate) == -1)) {
        setAlt.push(alternate);

        // convert alternate to alternate tag
        var altTag = alternate.toLowerCase().replace(/[&\/\\#,+()$~%.'":;*?<>{}^]/g, " ").replace(/-/g, " ")
            .replace(/ +$/, "").replace(/  +/g, " ").split(" ").join("_");

        // add alternate tag to tag repository
        // create alt-tag-li
        var node = document.createElement("LI");
        var textNode = document.createTextNode(altTag);
        node.appendChild(textNode);
        var altId = setAlt.indexOf(alternate) + 1;
        node.id = "alt_tag_li_" + altId;
        node.classList.add("alt_tag");
        node.title = alternate + " (Alternate Tag)";
        // add remove option to alt-tag-li
        var span = document.createElement("SPAN");
        var cross = document.createTextNode("\u00D7");
        span.appendChild(cross);
        span.id = "remove_alt_tag_li";
        span.classList.add("remove");
        node.appendChild(span);
        // add alt-tag-li to tag repository
        document.getElementById("tags").appendChild(node);

        // set tags in order
        checkOrder();

        // clear field for next input
        document.getElementById("altname").value = "";
        document.getElementById("altname").focus();

        // remove alternate tag
        span.onclick = function () {
            delete setAlt[setAlt.indexOf(alternate)];
            node.parentNode.removeChild(node);

            // set all tags in order
            checkOrder();
        }
    }

    // CASE 2 : Existing alternate name provided
    // TO DO : Nothing
    else if (alternate != "" && (setAlt.indexOf(alternate) != -1)) {
        console.log("Tag already exists!");

        // clear field for next input
        document.getElementById("altname").value = "";
        document.getElementById("altname").focus();
    }

    // CASE 3 : No alternate name provided
    // TO DO : Change focus to next field
    else if (alternate == "") {
        // set focus to next field
        document.getElementById("altname").blur();
        document.getElementById("franchise").focus();
    }
}

// add franchise tag
var addFranchiseTag = function (franchise) {
    // CASE 1 : Franchise provided and no franchise tag exists
    // TO DO : Add a franchise tag and set franchiseFlag
    if (franchise != "" && !franchiseFlag) {
        setFranchise = franchise;

        // convert franchise to franchise tag
        var franchiseTag = franchise.toLowerCase().replace(/[&\/\\#,+()$~%.'":;*?<>{}^]/g, " ").replace(/-/g, " ")
            .replace(/ +$/, "").replace(/  +/g, " ").split(" ").join("_");

        // add franchise tag to tag repository
        // create franchise-tag-li
        var node = document.createElement("LI");
        var textNode = document.createTextNode(franchiseTag);
        node.appendChild(textNode);
        node.id = "franchise_tag_li";
        node.classList.add("franchise_tag");
        node.title = franchise + " (Franchise Tag)";
        // add remove option to franchise-tag-li
        var span = document.createElement("SPAN");
        var cross = document.createTextNode("\u00D7");
        span.appendChild(cross);
        span.id = "remove_franchise_tag_li";
        span.classList.add("remove");
        node.appendChild(span);
        // add franchise-tag-li to tag repository
        document.getElementById("tags").appendChild(node);

        // set franchiseFlag
        franchiseFlag = true;

        // set tags in order
        checkOrder();

        // set focus to next field
        document.getElementById("franchise").blur();
        document.getElementById("related").focus();

        // remove franchise tag
        span.onclick = function () {
            node.parentNode.removeChild(node);

            // reset franchiseFlag
            franchiseFlag = false;

            // set all tags in order
            checkOrder();

            // set focus to franchise field
            document.getElementById("franchise").focus();
        }
    }

    // CASE 2 : Franchise provided, franchise tag exists and given franchise is different from franchise tag
    // TO DO : Replace existing franchise with new value
    else if (franchise != "" && franchiseFlag && setFranchise != franchise) {
        setFranchise = franchise;

        // remove existing franchise tag
        var delNode = document.getElementById("franchise_tag_li");
        delNode.parentNode.removeChild(delNode);

        // convert franchise to franchise tag
        var franchiseTag = franchise.toLowerCase().replace(/[&\/\\#,+()$~%.'":;*?<>{}^]/g, " ").replace(/-/g, " ")
            .replace(/ +$/, "").replace(/  +/g, " ").split(" ").join("_");

        // add franchise tag to tag repository
        // create franchise-tag-li
        var node = document.createElement("LI");
        var textNode = document.createTextNode(franchiseTag);
        node.appendChild(textNode);
        node.id = "franchise_tag_li";
        node.classList.add("franchise_tag");
        node.title = franchise + " (Franchise Tag)";
        // add remove option to franchise-tag-li
        var span = document.createElement("SPAN");
        var cross = document.createTextNode("\u00D7");
        span.appendChild(cross);
        span.id = "remove_franchise_tag_li";
        span.classList.add("remove");
        node.appendChild(span);
        // add franchise-tag-li to tag repository
        document.getElementById("tags").appendChild(node);

        // set franchiseFlag
        franchiseFlag = true;

        // set tags in order
        checkOrder();

        // set focus to next field
        document.getElementById("franchise").blur();
        document.getElementById("related").focus();

        // remove franchise tag
        span.onclick = function () {
            node.parentNode.removeChild(node);

            // reset franchiseFlag
            franchiseFlag = false;

            // set all tags in order
            checkOrder();

            // set focus to franchise field
            document.getElementById("franchise").focus();
        }
    }

    // CASE 3 : No franchise provided but franchise flag exists
    // TO DO : Remove existing franchise
    else if (franchise == "" && franchiseFlag) {
        setFranchise = "";

        // remove existing franchise tag
        var delNode = document.getElementById("franchise_tag_li");
        delNode.parentNode.removeChild(delNode);

        // reset franchise flag
        franchiseFlag = false;

        // set all tags in order
        checkOrder();
    }

    // CASE 3 : No franchise provided and no franchise flag exists
    // TO DO : Set focus to next element
    else if (franchise == "" && !franchiseFlag) {
        // set focus to next field
        document.getElementById("franchise").blur();
        document.getElementById("related").focus();
    }
}

// toggle related field display
var checkDisplay = function (value) {
    // CASE 1 : User wants to input value
    // TO DO : Set focus on related field
    if (value != "done") {
        document.getElementById("related_value").style.display = "inline";
        document.getElementById("related").blur();
        document.getElementById("related_value").focus();
    }

    // CASE 2 : User wants to move ahead
    // TO DO : Set focus on next field
    else if (value == "done") {
        // set focus to next field
        document.getElementById("related").blur();
        document.getElementById("type").focus();
    }

    // remove N/A
    if (rel_na) {
        document.getElementById("related").options[0].remove();
        rel_na = false;
    }
}

// add related tag
var addRelatedTag = function (rel_value) {

}

// add type tag
var addTypeTag = function (type) {
    // CASE 1 : Type is known
    // TO DO : Add type tag and shift focus to next field
    if (type != "unknown") {
        // convert type to type tag
        var typeTag = type.toLowerCase().replace(/[&\/\\#,+()$~%.'":;*?<>{}^]/g, " ").replace(/-/g, " ")
            .replace(/ +$/, "").replace(/  +/g, " ").split(" ").join("_");

        // add type tag to tag repository
        // create type-tag-li
        var node = document.createElement("LI");
        var textNode = document.createTextNode(typeTag);
        node.appendChild(textNode);
        node.id = "type_tag_li";
        node.classList.add("tag");
        node.title = document.getElementById("type").options[document.getElementById("type").selectedIndex].text + " (Type Tag)";
        // add remove option to type-tag-li
        var span = document.createElement("SPAN");
        var cross = document.createTextNode("\u00D7");
        span.appendChild(cross);
        span.id = "remove_type_tag_li";
        span.classList.add("remove");
        node.appendChild(span);
        // add type-tag-li to tag repository
        document.getElementById("tags").appendChild(node);

        // set tags in order
        checkOrder();

        // set focus to next field
        document.getElementById("type").blur();
        document.getElementById("mal").focus();

        // remove type tag
        span.onclick = function () {
            node.parentNode.removeChild(node);

            // set all tags in order
            checkOrder();

            // set focus to franchise field
            document.getElementById("type").focus();
        }
    }

    // CASE 2 : Type is unknown 
    // TO DO : Shift focus to next field
    else if (type == "unknown") {
        // set focus to next field
        document.getElementById("type").blur();
        // document.getElementById("").focus();        
    }

    // remove N/A
    if (type_na) {
        document.getElementById("type").options[0].remove();
        type_na = false;
    }
}

// add MAL score
var addMALScore = function (mal) {
    // CASE 1 : Valid MAL score provided
    // TO DO : Add MAL score tag
    if (mal > 0 && mal <= 10) {
        // add mal tag to tag repository
        // create mal-tag-li
        var node = document.createElement("LI");
        var textNode = document.createTextNode(mal);
        node.appendChild(textNode);
        node.id = "mal_tag_li";
        node.classList.add("tag");
        node.title = mal + " (MAL Score Tag)";
        // add remove option to mal-tag-li
        var span = document.createElement("SPAN");
        var cross = document.createTextNode("\u00D7");
        span.appendChild(cross);
        span.id = "remove_mal_tag_li";
        span.classList.add("remove");
        node.appendChild(span);
        // add mal-tag-li to tag repository
        document.getElementById("tags").appendChild(node);

        // set tags in order
        checkOrder();

        // set focus to next field
        document.getElementById("mal").blur();
        document.getElementById("imdb").focus();

        // remove mal tag
        span.onclick = function () {
            node.parentNode.removeChild(node);

            // set all tags in order
            checkOrder();

            // set focus to franchise field
            document.getElementById("mal").focus();
        }
    }

    // CASE 2 : Invalid MAL score provided
    // TO DO : Display error message
    else {
        console.log("Value out of range!");
    }
}

// add IMDB score
var addIMDBScore = function (imdb) {
    // CASE 1 : Valid MAL score provided
    // TO DO : Add MAL score tag
    if (imdb > 0 && imdb <= 10) {
        // add imdb tag to tag repository
        // create imdb-tag-li
        var node = document.createElement("LI");
        var textNode = document.createTextNode(imdb);
        node.appendChild(textNode);
        node.id = "imdb_tag_li";
        node.classList.add("tag");
        node.title = imdb + " (IMDB Score Tag)";
        // add remove option to imdb-tag-li
        var span = document.createElement("SPAN");
        var cross = document.createTextNode("\u00D7");
        span.appendChild(cross);
        span.id = "remove_imdb_tag_li";
        span.classList.add("remove");
        node.appendChild(span);
        // add imdb-tag-li to tag repository
        document.getElementById("tags").appendChild(node);

        // set tags in order
        checkOrder();

        // set focus to next field
        document.getElementById("imdb").blur();
        // document.getElementById("").focus();

        // remove imdb tag
        span.onclick = function () {
            node.parentNode.removeChild(node);

            // set all tags in order
            checkOrder();

            // set focus to franchise field
            document.getElementById("imdb").focus();
        }
    }

    // CASE 2 : Invalid IMDB score provided
    // TO DO : Display error message
    else {
        console.log("Value out of range!");
    }
}

// set maximum number of episodes
var setMaxEps = function (maxEps) {
    if (maxEps > 0) {
        document.getElementById("canon").max = maxEps;
        document.getElementById("filler").max = maxEps;
    }

    else {
        document.getElementById("canon").max = Infinity;
        document.getElementById("filler").max = Infinity;
    }
}

// add filler details
var setFiller = function (canon, maxEps) {
    // set filler episodes
    var filler = maxEps - canon;
    document.getElementById("filler").value = filler;

    // set filler ratio
    fillerRatio = (filler * 100)/maxEps;
    document.getElementById("filler_ratio").innerHTML = fillerRatio;

    // set filler rating

    // add filler tags
    setFillerTags(fillerRatio, fillerRating);
}

// add filler detail tags
var setCanon = function (filler, maxEps) {
    document.getElementById("canon").value = maxEps - filler;
}

// add filler tags
var setFillerTags = function (fillerRatio, fillerRating) {

}

// set all tags in order
var checkOrder = function () {
    var order = 0;

    // name tag
    if (document.getElementById("name_tag_li")) {
        document.getElementById("name_tag_li").style.order = ++order;
    }

    // alternate tags
    for (var i = 0; i < setAlt.length; i++) {
        var altId = i + 1;
        if (document.getElementById("alt_tag_li_" + altId)) {
            document.getElementById("alt_tag_li_" + altId).style.order = ++order;
        }
    }

    // franchise tag
    if (document.getElementById("franchise_tag_li")) {
        document.getElementById("franchise_tag_li").style.order = ++order;
    }

    // related tags


    // type tag
    if (document.getElementById("type_tag_li")) {
        document.getElementById("type_tag_li").style.order = ++order;
    }

    // mal tag
    if (document.getElementById("mal_tag_li")) {
        document.getElementById("mal_tag_li").style.order = ++order;
    }

    // imdb tag
    if (document.getElementById("imdb_tag_li")) {
        document.getElementById("imdb_tag_li").style.order = ++order;
    }
}