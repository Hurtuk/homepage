import { Group } from './group';
import { Link } from './link';

export class Content {
    
    public static readonly links: Group[] = [
        {
            title: "L'Ouïe Cinéphile",
            links: [
                { title: "Partitions", url: "http://www.louiecinephile.fr/partitions", icon: "sheet-music.png", moreLink: "http://www.louiecinephile.fr/partitions/admin" },
                { title: "Séries", url: "http://www.louiecinephile.fr/series", icon: "tv.png" },
                { title: "Films", url: "http://www.louiecinephile.fr/movies", icon: "film-reel.png", moreLink: "http://www.louiecinephile.fr/moviesServer/add_movie.php" },
                { title: "Banque", url: "http://www.louiecinephile.fr/bank", icon: "cash.png", moreLink: "https://labanquepostale.fr" },
                { title: "Voyages", url: "http://www.louiecinephile.fr/trips", icon: "trips.png" },
                { title: "PHPMyAdmin", url: "http://46640.admin.sd6.gpaas.net/phpmyadmin/", icon: "database.png" }
            ],
            position: { x: 100, y: 75 }
        },
        {
            title: "Roman",
            links: [
                { title: "KDP", url: "https://kdp.amazon.com/fr_FR/reports-new?ref_=kdp_BS_D_TN_rp", icon: "kdp.png" },
                { title: "Amazon", url: "https://www.amazon.fr/Philharmonia-Nicolas-Lethuillier/dp/1718016263/", icon: "amazon.png" }
            ],
            position: { x: 180, y: 290 }
        },
        {
            title: "Media Center",
            links: [
                { title: "SickChill", url: "http://192.168.0.14:8081/home/", icon: "sickchill.png" },
                { title: "Transmission", url: "http://192.168.0.14:9091/transmission/web/", icon: "transmission.png" }
            ],
            position: { x: 700, y: 260 }
        },
        {
            title: "Google",
            links: [
                { title: "Agenda", url: "https://calendar.google.com/calendar/r", icon: "calendar.png" },
                { title: "Drive", url: "https://drive.google.com/drive/u/0/my-drive", icon: "drive.png" },
                { title: "Photos", url: "https://photos.google.com", icon: "photos.png" },
                { title: "Maps", url: "https://www.google.fr/maps/", icon: "maps.png" }
            ],
            position: { x: 100, y: -75 }
        },
        {
            title: "Communication",
            links: [
                { title: "Messenger", url: "https://www.facebook.com/messages/t", icon: "messenger.png" },
                { title: "WhatsApp", url: "https://web.whatsapp.com", icon: "whatsapp.png" }
            ],
            position: { x: 900, y: -75 }
        },
        {
            title: "Téléchargement",
            links: [
                { title: "YggTorrent", url: "https://www.yggtorrent.se/", icon: "yggtorrent.png", moreLink: "https://www.yggtorrent.se/engine/search?name=&description=&file=&uploader=&category=2145&sub_category=2183&option_langue%3Amultiple%5B%5D=2&do=search" },
                { title: "ThePirateBay", url: "https://piratebay-proxylist.se/", icon: "tpb.png" },
                { title: "OpenSubs", url: "https://www.opensubtitles.org/fr", icon: "sub.png" }
            ],
            position: { x: -100, y: -75 }
        },
        {
            title: "Divers",
            links: [
                { title: "Facebook", url: "https://www.facebook.com", icon: "facebook.png" },
                { title: "RSS", url: "https://feedreader.com/online/#/reader/category/all/", icon: "feedreader.png" },
                { title: "Todoist", url: "https://todoist.com/app?mini=1#agenda%2Fpriority%204", icon: "todoist.png" }
            ],
            position: { x: -205, y: -290 }
        }
    ];

    public static readonly searchEngines: Link[] = [
        { title: "YouTube", url: "https://www.youtube.com/results", argName: "search_query", color: "#E42D0E" },
        { title: "Images", url: "https://www.google.com/search?safe=strict&hl=FR&tbm=isch", argName: "q", color: "#1A73E8" },
        { title: "Wikipedia", url: "https://fr.wikipedia.org/w/index.php", argName: "search", color: "#A2A2A2" },
        { title: "Musescore", url: "https://musescore.com/sheetmusic", argName: "text", color: "#1F74BD" },
        { title: "Amazon", url: "https://www.amazon.fr/s", argName: "k", color: "#FF9900" },
        { title: "IMDb", url: "https://www.imdb.com/find?ref_=nv_sr_fn&s=all", argName: "q", color: "#F5C518" },
        { title: "YggTorrent", url: "https://www.yggtorrent.se/engine/search?do=search", argName: "name", color: "#69DEC2" }
    ];
}