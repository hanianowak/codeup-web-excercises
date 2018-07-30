webpackJsonp([0xdf71cfae150a],{4204:function(e,t){e.exports={data:{challengeNode:{title:"Create a Bulleted Unordered List",description:["HTML has a special element for creating <code>unordered lists</code>, or bullet point style lists.","Unordered lists start with an opening <code>&#60;ul&#62;</code> element, followed by any number of <code>&#60;li&#62;</code> elements. Finally, unordered lists close with a <code>&#60;/ul&#62;</code>","For example: ","<blockquote>&#60;ul&#62;<br>&nbsp;&nbsp;&#60;li&#62;milk&#60;/li&#62;<br>&nbsp;&nbsp;&#60;li&#62;cheese&#60;/li&#62;<br>&#60;/ul&#62;</blockquote>",'would create a bullet point style list of "milk" and "cheese".',"<hr>","Remove the last two <code>p</code> elements and create an unordered list of three things that cats love at the bottom of the page."],challengeType:0,fields:{slug:"/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list",blockName:"Basic HTML and HTML5",tests:[{text:"Create a <code>ul</code> element.",testString:"assert($(\"ul\").length > 0, 'Create a <code>ul</code> element.');"},{text:"You should have three <code>li</code> elements within your <code>ul</code> element.",testString:"assert($(\"ul li\").length > 2, 'You should have three <code>li</code> elements within your <code>ul</code> element.');"},{text:"Make sure your <code>ul</code> element has a closing tag.",testString:"assert(code.match(/<\\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\\/ul>/gi).length === code.match(/<ul/gi).length, 'Make sure your <code>ul</code> element has a closing tag.');"},{text:"Make sure your <code>li</code> elements have closing tags.",testString:"assert(code.match(/<\\/li>/gi) && code.match(/<li[\\s>]/gi) && code.match(/<\\/li>/gi).length === code.match(/<li[\\s>]/gi).length, 'Make sure your <code>li</code> elements have closing tags.');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<h2>CatPhotoApp</h2>\n<main>\n  <p>Click here to view more <a href="#">cat photos</a>.</p>\n  \n  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>\n  \n  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>\n  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>\n</main>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-html-and-html5/create-an-ordered-list",id:"bad87fee1348bd9aedf08827"},slug:"/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-html-and-html-5-create-a-bulleted-unordered-list-1c23463f5250e0940f2a.js.map