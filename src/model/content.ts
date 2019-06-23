import { Group } from './group';

export class Content {
    
    public static readonly links: Group[] = [
        {
            "title": "L'Ouïe Cinéphile",
            "links": [
                { "title": "Partitions", "url": "http://www.louiecinephile.fr/partitions", "icon": "" },
                { "title": "Séries", "url": "http://www.louiecinephile.fr/series", "icon": "" },
                { "title": "Films", "url": "http://www.louiecinephile.fr/movies", "icon": "" },
                { "title": "Banque", "url": "http://www.louiecinephile.fr/bank", "icon": "" },
                { "title": "PHPMyAdmin", "url": "http://46640.admin.sd6.gpaas.net/phpmyadmin/", "icon": "" },
                { "title": "Blog", "url": "http://www.louiecinephile.fr/blog", "icon": "" }
            ],
            "position": { "x": 200, "y": 200 }
        },
        {
            "title": "Roman",
            "links": [
                { "title": "KDP", "url": "http://www.louiecinephile.fr/partitions", "icon": "" },
                { "title": "Amazon", "url": "http://www.louiecinephile.fr/series", "icon": "" }
            ],
            "position": { "x": 500, "y": 200 }
        }
    ];

    public static readonly searchEngines: Group[];
}