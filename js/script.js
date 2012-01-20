/* Author: Matthias Mees, mm@yellowled.de */
$(function() {
	$('input[type=submit]').click(function() {
		$('#boilerplate').empty();

		twocol = $('#include-2col').attr('checked');
		threecol = $('#include-3col').attr('checked');
		colors = $('#include-colors').attr('checked');

		maxWidthCont = $('#max-width-cont').attr('value');
		maxUnitCont = $('#max-unit-cont').attr('value');
		contmax = '\t#page { max-width: ' + maxWidthCont + maxUnitCont + '; }\n\n';
		
		if(twocol) {
			sbWidth2Col = $('#sidebar-width-2col').attr('value');
			contWidth2Col = 100 - parseFloat(sbWidth2Col);
			// bp code
			twoColBP = '\t#identity, #content { width: ' + contWidth2Col + '%; }\n\n';
			twoColBP += '\t#searchform,\n\t#sidebar_left,\n\t#sidebar_right { width: ' + sbWidth2Col + '%; }\n\n';
			twoColBP += '\t.col2l #sidebar_left { left: -' + contWidth2Col + '%; }\n\n';
			twoColBP += '\t.col2l #content { left: ' + sbWidth2Col + '%; }\n\n';
			// IE7 fixes
			twoColBP += '\t.ie7 #identity,\n\t.ie7 #content { width: ' + (parseFloat(contWidth2Col) - 0.1) + '%; }\n\n';
			twoColBP += '\t.ie7 #searchform,\n\t.ie7 #sidebar_left,\n\t.ie7 #sidebar_right { width: ' + (parseFloat(sbWidth2Col) - 0.1) + '%; }\n\n';
			twoColBP += '\t.ie7 .col2l #sidebar_left { left: -' + (parseFloat(contWidth2Col) - 0.1) + '%; }\n\n';
			twoColBP += '\t.ie7 .col2l #content { left: ' + (parseFloat(sbWidth2Col) - 0.1) + '%; }\n';
			if(threecol) { twoColBP += '\n'; }
		};

		if(threecol) {
			sbWidth3ColL = $('#sidebar-width-3col-l').attr('value');
			sbWidth3ColR = $('#sidebar-width-3col-r').attr('value');
			contWidth3Col = 100 - parseFloat(sbWidth3ColL) - parseFloat(sbWidth3ColR);
			idWidth3Col = parseFloat(contWidth3Col) + parseFloat(sbWidth3ColL);
			// bp code
			threeColBP = '\t.col3 #searchform,\n\t.col3 #sidebar_right { width: ' + sbWidth3ColR + '%; }\n\n';
			threeColBP += '\t.col3 #sidebar_left {\n\t\tleft: -' + contWidth3Col + '%;\n\t\twidth: ' + sbWidth3ColL + '%;\n\t}\n\n';
			threeColBP += '\t.col3 #identity { width: ' + idWidth3Col + '%; }\n\n';
			threeColBP += '\t.col3 #content {\n\t\tleft: ' + sbWidth3ColL + '%;\n\t\twidth: ' + contWidth3Col + '%;\n\t}\n\n';
			// IE7 fixes
			threeColBP += '\t.ie7 .col3 #searchform,\n\t.ie7 .col3 #sidebar_right { width: ' + (parseFloat(sbWidth3ColR) - 0.1) + '%; }\n\n';
			threeColBP += '\t.ie7 .col3 #sidebar_left {\n\t\tleft: -' + (parseFloat(contWidth3Col) - 0.1) + '%;\n\t\twidth: ' + (parseFloat(sbWidth3ColL)) + '%;\n\t}\n';
			threeColBP += '\t.ie7 .col3 #identity { width: ' + (parseFloat(idWidth3Col) - 0.1) + '%; }\n\n';
			threeColBP += '\t.ie7 .col3 #content {\n\t\tleft: ' + (parseFloat(sbWidth3ColL) - 0.1) + '%;\n\t\twidth: ' + (parseFloat(contWidth3Col) - 0.1) + '%;\n\t}\n\n';
		};

		if(colors) {
			colorsBP = '';
			bodyBG = $('#bg-color-body').attr('value');
			pageBG = $('#bg-color-page').attr('value');
			pageFG = $('#fg-color-page').attr('value');
			naviBG = $('#bg-color-navi').attr('value');
			naviFG = $('#fg-color-navi').attr('value');
			nhovBG = $('#bg-hover-navi').attr('value');
			nhovFG = $('#fg-hover-navi').attr('value');
			linkFG = $('#fg-color-link').attr('value');
			hoverFG = $('#fg-hover-link').attr('value');
			if(bodyBG) { colorsBP += 'body { background-color: ' + bodyBG + '; }\n\n'; }
			if(pageBG || pageFG) { colorsBP += '#page {\n'; }
			if(pageBG) { colorsBP += '\tbackground-color: ' + pageBG + ';\n'; }
			if(pageFG) { colorsBP += '\tcolor: ' + pageFG + ';\n'; }
			if(pageBG || pageFG) { colorsBP += '}\n\n'; }
			if(naviBG) { colorsBP += '#primary-nav {\n\tbackground: ' + naviBG + ';\n\tborder-top: 1px solid ' + naviBG + ';\n\tborder-bottom: 1px solid ' + naviBG + ';\n}\n\n';}
			if(naviFG) { colorsBP += '#primary-nav span,\n#primary-nav a,\n#primary-nav a:active,\n#primary-nav a:visited {\n\tcolor: ' + naviFG + ';\n\tborder-right: 1px solid ' + naviBG + ';\n}\n\n'; }
			if(naviBG) { colorsBP += '#primary-nav span:after { border-color: ' + naviBG +' transparent; }\n\n'; }
			if(nhovBG || nhovFG) { colorsBP += '#primary-nav a:hover,\n#primary-nav a:focus {\n\tbackground: ' + nhovBG + ';\n\tcolor: ' + nhovFG + ';\n}\n\n'; }
			if(linkFG) { colorsBP += 'a, a:active,\na:visited { color: ' + linkFG + '; }\n'; }
			if(hoverFG) { colorsBP += 'a:hover { color: ' + hoverFG + '; }\n'; }
			if(linkFG || hoverFG) { colorsBP += '\n'; }
			if(linkFG) { colorsBP += 'input[type=text]:focus,\ninput[type=search]:focus,\ninput[type=email]:focus,\ninput[type=url]:focus,\ntextarea:focus {\n\t-webkit-box-shadow: 0 0 2px 1px ' + linkFG + ';\n\t-moz-box-shadow: 0 0 2px 1px ' + linkFG + ';\n\tbox-shadow: 0 0 2px 1px ' + linkFG + ';\n}\n\n'; }
			if(linkFG) { colorsBP += '.no-boxshadow input[type=text]:focus,\n.no-boxshadow input[type=search]:focus,\n.no-boxshadow input[type=email]:focus,\n.no-boxshadow input[type=url]:focus,\n.no-boxshadow textarea:focus { border: 1px solid ' + linkFG + '; }\n\n'; }
		};

		userCSS = '';
		if(colors) { userCSS += colorsBP; }
		if(maxWidthCont || twocol || threecol) { userCSS += '@media only screen and (min-width: 768px) {\n'; }
		if(maxWidthCont) { userCSS += contmax; }
		if(twocol) { userCSS += twoColBP; }
		if(threecol) { userCSS += threeColBP; }
		if(maxWidthCont || twocol || threecol) { userCSS += '}'; }

		$('#boilerplate').append(userCSS);
		var jumpTo = $('#boilerplate').offset();
    	window.scrollTo(jumpTo.left,jumpTo.top);
		return false;
	});

	$('input[type=reset]').click(function() {
		$('#boilerplate').empty();
		var jumpTo = $('#top').offset();
    	window.scrollTo(jumpTo.left,jumpTo.top);
	});
});