jQuery(function ($) {
    //--------------------------------------
    // UI
    (function () {
        $('select').selectmenu({
            change: function (event, ui) {
                $(this).change();
            }
        });


            
    })();
    //--------------------------------------
    // download links
    (function () {
        const desktopReleasesUrl =
            "https://api.github.com/repos/atomex-me/atomex.client.desktop/releases";
        const baseDownloadLinkAddr =
            "https://github.com/atomex-me/atomex.client.desktop/releases/download";

        const winDownloadLinkElement = document.querySelector("#win-installer");
        const macDownloadLinkElement = document.querySelector("#mac-installer");
        const linuxDownloadLinkElement = document.querySelector("#linux-installer");

        fetch(desktopReleasesUrl)
            .then((response) => response.json())
            .then((releases) => releases.filter((release) => !release.prerelease))
            .then((response) => {
                const releaseVer = response[0].tag_name;
                const windowsInstallerFilename = `Atomex.Client-${releaseVer}.0-x64.msi`;
                const macInstallerFilename = `Atomex.${releaseVer}.dmg`;
                const linuxInstallerFilename = `Atomex_${releaseVer}_amd64.deb`;

                const winDownloadLinkAddress = `${baseDownloadLinkAddr}/${releaseVer}/${windowsInstallerFilename}`;
                const macDownloadLinkAddress = `${baseDownloadLinkAddr}/${releaseVer}/${macInstallerFilename}`;
                const linuxDownloadLinkAddress = `${baseDownloadLinkAddr}/${releaseVer}/${linuxInstallerFilename}`;

                /*winDownloadLinkElement.href = winDownloadLinkAddress;
                macDownloadLinkElement.href = macDownloadLinkAddress;
                linuxDownloadLinkElement.href = linuxDownloadLinkAddress;*/

                $(document).trigger("dc_download_links", {
                    win: winDownloadLinkAddress,
                    mac: macDownloadLinkAddress,
                    linux: linuxDownloadLinkAddress,
                });
            });
    })();
    //--------------------------------------
});
