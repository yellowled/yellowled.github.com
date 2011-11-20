/* Author: Matthias Mees, mm@yellowled.de */
$(function() {
	$('input[type=submit]').click(function() {
		$('#boilerplate').empty();

		twocol = $('#include-2col').attr('checked');
		threecol = $('#include-3col').attr('checked');

		maxWidthCont = $('#max-width-cont').attr('value');
		maxUnitCont = $('#max-unit-cont').attr('value');
		contmax = '\t#page { max-width: ' + maxWidthCont + maxUnitCont + '; }\n\n';
		
		if(twocol) {
			sbWidth2Col = $('#sidebar-width-2col').attr('value');
			contWidth2Col = 100 - parseFloat(sbWidth2Col);
			// bp code
			twoColBP = '\t#identity, #content { width: ' + contWidth2Col + '%; }\n\n';
			twoColBP += '\t#search,\n\t#sidebar_left,\n\t#sidebar_right { width: ' + sbWidth2Col + '%; }\n\n';
			twoColBP += '\t.col2l #sidebar_left { left: -' + contWidth2Col + '%; }\n\n';
			twoColBP += '\t.col2l #content { left: ' + sbWidth2Col + '%; }\n\n';
			// IE7 fixes
			twoColBP += '\t.ie7 #identity,\n\t.ie7 #content { width: ' + (parseFloat(contWidth2Col) - 0.1) + '%; }\n\n';
			twoColBP += '\t.ie7 #search,\n\t.ie7 #sidebar_left,\n\t.ie7 #sidebar_right { width: ' + (parseFloat(sbWidth2Col) - 0.1) + '%; }\n\n';
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
			threeColBP = '\t.col3 #search,\n\t.col3 #sidebar_right { width: ' + sbWidth3ColR + '%; }\n\n';
			threeColBP += '\t.col3 #sidebar_left {\n\t\tleft: -' + contWidth3Col + '%;\n\t\twidth: ' + sbWidth3ColL + '%;\n\t}\n\n';
			threeColBP += '\t.col3 #identity { width: ' + idWidth3Col + '%; }\n\n';
			threeColBP += '\t.col3 #content {\n\t\tleft: ' + sbWidth3ColL + '%;\n\t\twidth: ' + contWidth3Col + '%;\n\t}\n\n';
			// IE7 fixes
			threeColBP += '\t.ie7 .col3 #search,\n\t.ie7 .col3 #sidebar_right { width: ' + (parseFloat(sbWidth3ColR) - 0.1) + '%; }\n\n';
			threeColBP += '\t.ie7 .col3 #sidebar_left {\n\t\tleft: -' + (parseFloat(contWidth3Col) - 0.1) + '%;\n\t\twidth: ' + (parseFloat(sbWidth3ColL)) + '%;\n\t}\n';
			threeColBP += '\t.ie7 .col3 #identity { width: ' + (parseFloat(idWidth3Col) - 0.1) + '%; }\n\n';
			threeColBP += '\t.ie7 .col3 #content {\n\t\tleft: ' + (parseFloat(sbWidth3ColL) - 0.1) + '%;\n\t\twidth: ' + (parseFloat(contWidth3Col) - 0.1) + '%;\n\t}\n\n';
		};

		userCSS = '';
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