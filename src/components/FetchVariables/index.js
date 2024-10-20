import React from "react";

function FetchVariables( key, itemDataAdventures, itemDataResearch, itemDataThoughts ) {
    
    var itemDataArray, section

    if (Array.from(new Set(itemDataAdventures.flatMap(e => Object.values(e), []))).includes(key)) {
        itemDataArray = itemDataAdventures;
        section = 'adventures';
    } else if (Array.from(new Set(itemDataResearch.flatMap(e => Object.values(e), []))).includes(key)) {
        itemDataArray = itemDataResearch;
        section = 'research';
    } else if (Array.from(new Set(itemDataThoughts.flatMap(e => Object.values(e), []))).includes(key)) {
        itemDataArray = itemDataThoughts;
        section = 'thoughts';
    }
    
    const postNumber = itemDataArray.find(x => x.key === key).id;
    
    var index = itemDataArray.map(function(el) {
        return el.id;
    }).indexOf(postNumber);
    
    var lastPostKey, nextPostKey

    if (index === 0) {
        lastPostKey = itemDataArray[index+1].key;
    } else if (itemDataArray[index].key === itemDataArray.at(-1).key) {
        nextPostKey = itemDataArray[index-1].key;
    } else {
        nextPostKey = itemDataArray[index-1].key;
        lastPostKey = itemDataArray[index+1].key;
    }

    const title = itemDataArray.find(x => x.id === postNumber).title + ' - avrtt.blog';
    const date = itemDataArray.find(x => x.id === postNumber).date;
    const desc = itemDataArray.find(x => x.id === postNumber).desc;
    const backgroundTitleWidth = itemDataArray.find(x => x.id === postNumber).backgroundTitleWidth + 'vw';
    const backgroundDescWidth = itemDataArray.find(x => x.id === postNumber).backgroundDescWidth + 'vw';
    var banner = require("../../img/" + section + "/" + key + ".jpg");
    var imgPath = '../../../img/' + section + '/content/' + key + '/';
    
    return [itemDataArray, postNumber, nextPostKey, lastPostKey, title, date, desc, 
            backgroundTitleWidth, backgroundDescWidth, banner, imgPath, section]
};
export default FetchVariables


