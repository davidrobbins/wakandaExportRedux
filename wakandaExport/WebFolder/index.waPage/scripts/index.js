
WAF.onAfterInit = function onAfterInit() {// @lock
	var wExportURL = window.location.href,
		wExportPathname = window.location.pathname,
		wExportURLTrunc = wExportURL.replace(wExportPathname, ''),
		iframe = $("#iframeexport");
		
// @region namespaceDeclaration// @startlock
	var exportBooksButton = {};	// @button
	var exportCitiesButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	exportBooksButton.click = function exportBooksButton_click (event)// @startlock
	{// @endlock
		// Export Books
		if (iframe.length === 0) {
			$('body').append('<iframe id="iframeexport"></iframe>');
			iframe = $("#iframeexport");
		}
		iframe.hide();
		iframe.attr("src", wExportURLTrunc + "/exportDataClass/Book");
		
	};// @lock

	exportCitiesButton.click = function exportCitiesButton_click (event)// @startlock
	{// @endlock
		//Export cities
		if (iframe.length === 0) {
			$('body').append('<iframe id="iframeexport"></iframe>');
			iframe = $("#iframeexport");
		}
		iframe.hide();
		iframe.attr("src", wExportURLTrunc + "/exportDataClass/City");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("exportBooksButton", "click", exportBooksButton.click, "WAF");
	WAF.addListener("exportCitiesButton", "click", exportCitiesButton.click, "WAF");
// @endregion
};// @endlock
