
WAF.onAfterInit = function onAfterInit() {// @lock
	var wURL = window.location.href,
	wPathname = window.location.pathname,
	iFrame;
		
// @region namespaceDeclaration// @startlock
	var exportBooksButton = {};	// @button
	var exportCitiesButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	exportBooksButton.click = function exportBooksButton_click (event)// @startlock
	{// @endlock
		// Export Books
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/exportDataClass/Book";
		} else {
			wExportURL = wURL;
			wExportURL += "exportDataClass/Book";
		}
		iframe = $("#iframeexport");
		
		if (iframe.length === 0) {
			$('body').append('<iframe id="iframeexport"></iframe>');
			iframe = $("#iframeexport");
		}
		iframe.hide();
		iframe.attr("src", wExportURL);
		
	};// @lock

	exportCitiesButton.click = function exportCitiesButton_click (event)// @startlock
	{// @endlock
		//Export cities
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/exportDataClass/City";
		} else {
			wExportURL = wURL;
			wExportURL += "exportDataClass/City";
		}
		iframe = $("#iframeexport");
		
		if (iframe.length === 0) {
			$('body').append('<iframe id="iframeexport"></iframe>');
			iframe = $("#iframeexport");
		}
		iframe.hide();
		iframe.attr("src", wExportURL);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("exportBooksButton", "click", exportBooksButton.click, "WAF");
	WAF.addListener("exportCitiesButton", "click", exportCitiesButton.click, "WAF");
// @endregion
};// @endlock
