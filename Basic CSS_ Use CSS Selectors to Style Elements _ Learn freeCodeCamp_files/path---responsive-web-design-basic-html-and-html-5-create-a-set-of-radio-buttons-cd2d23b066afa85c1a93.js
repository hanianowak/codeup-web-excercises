webpackJsonp([97981447546753],{4207:function(e,t){e.exports={data:{challengeNode:{title:"Create a Set of Radio Buttons",description:["You can use <code>radio buttons</code> for questions where you want the user to only give you one answer out of multiple options.","Radio buttons are a type of <code>input</code>.","Each of your radio buttons can be nested within its own <code>label</code> element. By wrapping an <code>input</code> element inside of a <code>label</code> element it will automatically associate the radio button input with the label element surrounding it.","All related radio buttons should have the same <code>name</code> attribute to create a radio button group. By creating a radio group, selecting any single radio button will automatically deselect the other buttons within the same group ensuring only one answer is provided by the user.","Here's an example of a radio button:",'<blockquote>&#60;label&#62; <br>&nbsp;&nbsp;&#60;input type="radio" name="indoor-outdoor"&#62;Indoor <br>&#60;/label&#62;</blockquote>',"It is considered best practice to set a <code>for</code> attribute on the <code>label</code> element, with a value that matches the value of the <code>id</code> attribute of the <code>input</code> element. This allows assistive technologies to create a linked relationship between the label and the child <code>input</code> element. For example:",'<blockquote>&#60;label for="indoor"&#62; <br>&nbsp;&nbsp;&#60;input id="indoor" type="radio" name="indoor-outdoor"&#62;Indoor <br>&#60;/label&#62;</blockquote>',"<hr>","Add a pair of radio buttons to your form, each nested in its own label element. One should have the option of <code>indoor</code> and the other should have the option of <code>outdoor</code>. Both should share the <code>name</code> attribute of <code>indoor-outdoor</code> to create a radio group."],challengeType:0,fields:{slug:"/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons",blockName:"Basic HTML and HTML5",tests:[{text:"Your page should have two radio button elements.",testString:"assert($('input[type=\"radio\"]').length > 1, 'Your page should have two radio button elements.');"},{text:"Give your radio buttons the <code>name</code> attribute of <code>indoor-outdoor</code>.",testString:"assert($('label > input[type=\"radio\"]').filter(\"[name='indoor-outdoor']\").length > 1, 'Give your radio buttons the <code>name</code> attribute of <code>indoor-outdoor</code>.');"},{text:"Each of your two radio button elements should be nested in its own <code>label</code> element.",testString:"assert($('label > input[type=\"radio\"]:only-child').length > 1, 'Each of your two radio button elements should be nested in its own <code>label</code> element.');"},{text:"Make sure each of your <code>label</code> elements has a closing tag.",testString:"assert((code.match(/<\\/label>/g) && code.match(/<label/g) && code.match(/<\\/label>/g).length === code.match(/<label/g).length), 'Make sure each of your <code>label</code> elements has a closing tag.');"},{text:"One of your radio buttons should have the label <code>indoor</code>.",testString:"assert($(\"label\").text().match(/indoor/gi), 'One of your radio buttons should have the label <code>indoor</code>.');"},{text:"One of your radio buttons should have the label <code>outdoor</code>.",testString:"assert($(\"label\").text().match(/outdoor/gi), 'One of your radio buttons should have the label <code>outdoor</code>.');"},{text:"Each of your radio button elements should be added within the <code>form</code> tag.",testString:"assert($(\"label\").parent().get(0).tagName.match('FORM'), 'Each of your radio button elements should be added within the <code>form</code> tag.');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<h2>CatPhotoApp</h2>\n<main>\n  <p>Click here to view more <a href="#">cat photos</a>.</p>\n  \n  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>\n  \n  <p>Things cats love:</p>\n  <ul>\n    <li>cat nip</li>\n    <li>laser pointers</li>\n    <li>lasagna</li>\n  </ul>\n  <p>Top 3 things cats hate:</p>\n  <ol>\n    <li>flea treatment</li>\n    <li>thunder</li>\n    <li>other cats</li>\n  </ol>\n  <form action="/submit-cat-photo">\n    <input type="text" placeholder="cat photo URL" required>\n    <button type="submit">Submit</button>\n  </form>\n</main>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-html-and-html5/create-a-set-of-checkboxes",id:"bad87fee1348bd9aedf08834"},slug:"/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-html-and-html-5-create-a-set-of-radio-buttons-cd2d23b066afa85c1a93.js.map