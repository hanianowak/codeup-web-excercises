webpackJsonp([0x84d83e3d7e7c],{4192:function(e,t){e.exports={data:{challengeNode:{title:"Use CSS Selectors to Style Elements",description:["With CSS, there are hundreds of CSS <code>properties</code> that you can use to change the way an element looks on your page.",'When you entered <code>&#60;h2 style="color: red"&#62;CatPhotoApp&#60;/h2&#62;</code>, you were styling that individual <code>h2</code> element with <code>inline CSS</code>, which stands for <code>Cascading Style Sheets</code>.',"That's one way to specify the style of an element, but there's a better way to apply <code>CSS</code>.","At the top of your code, create a <code>style</code> block like this:","<blockquote>&#60;style&#62;<br>&#60;/style&#62;</blockquote>","Inside that style block, you can create a <code>CSS selector</code> for all <code>h2</code> elements. For example, if you wanted all <code>h2</code> elements to be red, you would add a style rule that looks like this:","<blockquote>&#60;style&#62;<br>&nbsp;&nbsp;h2 {color: red;}<br>&#60;/style&#62;</blockquote>","Note that it's important to have both opening and closing curly braces (<code>{</code> and <code>}</code>) around each element's style rule(s). You also need to make sure that your element's style definition is between the opening and closing style tags. Finally, be sure to add a semicolon to the end of each of your element's style rules.","<hr>","Delete your <code>h2</code> element's style attribute, and instead create a CSS <code>style</code> block. Add the necessary CSS to turn all <code>h2</code> elements blue."],challengeType:0,fields:{slug:"/responsive-web-design/basic-css/use-css-selectors-to-style-elements",blockName:"Basic CSS",tests:[{text:"Remove the style attribute from your <code>h2</code> element.",testString:'assert(!$("h2").attr("style"), \'Remove the style attribute from your <code>h2</code> element.\');'},{text:"Create a <code>style</code> element.",testString:'assert($("style") && $("style").length > 1, \'Create a <code>style</code> element.\');'},{text:"Your <code>h2</code> element should be blue.",testString:'assert($("h2").css("color") === "rgb(0, 0, 255)", \'Your <code>h2</code> element should be blue.\');'},{text:"Ensure that your stylesheet <code>h2</code> declaration is valid with a semicolon and closing brace.",testString:"assert(code.match(/h2\\s*\\{\\s*color\\s*:.*;\\s*\\}/g), 'Ensure that your stylesheet <code>h2</code> declaration is valid with a semicolon and closing brace.');"},{text:"Make sure all your <code>style</code> elements are valid and have a closing tag.",testString:'assert(code.match(/<\\/style>/g) && code.match(/<\\/style>/g).length === (code.match(/<style((\\s)*((type|media|scoped|title|disabled)="[^"]*")?(\\s)*)*>/g) || []).length, \'Make sure all your <code>style</code> elements are valid and have a closing tag.\');'}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<h2 style="color: red">CatPhotoApp</h2>\n<main>\n  <p>Click here to view more <a href="#">cat photos</a>.</p>\n  \n  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>\n  \n  <div>\n    <p>Things cats love:</p>\n    <ul>\n      <li>cat nip</li>\n      <li>laser pointers</li>\n      <li>lasagna</li>\n    </ul>\n    <p>Top 3 things cats hate:</p>\n    <ol>\n      <li>flea treatment</li>\n      <li>thunder</li>\n      <li>other cats</li>\n    </ol>\n  </div>\n  \n  <form action="/submit-cat-photo">\n    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>\n    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>\n    <label><input type="checkbox" name="personality" checked> Loving</label>\n    <label><input type="checkbox" name="personality"> Lazy</label>\n    <label><input type="checkbox" name="personality"> Energetic</label><br>\n    <input type="text" placeholder="cat photo URL" required>\n    <button type="submit">Submit</button>\n  </form>\n</main>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-css/use-a-css-class-to-style-an-element",id:"bad87fee1348bd9aedf08805"},slug:"/responsive-web-design/basic-css/use-css-selectors-to-style-elements"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-css-use-css-selectors-to-style-elements-4f8b2da6a2b20abc9368.js.map