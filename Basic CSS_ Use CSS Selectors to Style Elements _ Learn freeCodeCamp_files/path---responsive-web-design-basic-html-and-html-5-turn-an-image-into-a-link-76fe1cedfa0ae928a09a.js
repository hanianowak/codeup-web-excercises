webpackJsonp([0x8aa110f6061c],{4223:function(e,t){e.exports={data:{challengeNode:{title:"Turn an Image into a Link",description:["You can make elements into links by nesting them within an <code>a</code> element.","Nest your image within an <code>a</code> element. Here's an example:",'<code>&#60;a href="#"&#62;&#60;img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."&#62;&#60;/a&#62;</code>',"Remember to use <code>#</code> as your <code>a</code> element's <code>href</code> property in order to turn it into a dead link.","<hr>","Place the existing image element within an anchor element.","Once you've done this, hover over your image with your cursor. Your cursor's normal pointer should become the link clicking pointer. The photo is now a link."],challengeType:0,fields:{slug:"/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link",blockName:"Basic HTML and HTML5",tests:[{text:"Nest the existing <code>img</code> element within an <code>a</code> element.",testString:'assert($("a").children("img").length > 0, \'Nest the existing <code>img</code> element within an <code>a</code> element.\');'},{text:"Your <code>a</code> element should be a dead link with a <code>href</code> attribute set to <code>#</code>.",testString:'assert(new RegExp("#").test($("a").children("img").parent().attr("href")), \'Your <code>a</code> element should be a dead link with a <code>href</code> attribute set to <code>#</code>.\');'},{text:"Make sure each of your <code>a</code> elements has a closing tag.",testString:"assert(code.match(/<\\/a>/g) && code.match(/<a/g) && code.match(/<\\/a>/g).length === code.match(/<a/g).length, 'Make sure each of your <code>a</code> elements has a closing tag.');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<h2>CatPhotoApp</h2>\n<main>\n  <p>Click here to view more <a href="#">cat photos</a>.</p>\n  \n  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">\n  \n  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>\n  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>\n</main>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list",id:"bad87fee1348bd9aedf08820"},slug:"/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-html-and-html-5-turn-an-image-into-a-link-76fe1cedfa0ae928a09a.js.map