var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIOcean_1 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRITerrain_2 = new ol.layer.Tile({
            'title': 'ESRI Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Altresterritoris_3 = new ol.format.GeoJSON();
var features_Altresterritoris_3 = format_Altresterritoris_3.readFeatures(json_Altresterritoris_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Altresterritoris_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Altresterritoris_3.addFeatures(features_Altresterritoris_3);
var lyr_Altresterritoris_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Altresterritoris_3, 
                style: style_Altresterritoris_3,
                popuplayertitle: 'Altres territoris',
                interactive: true,
                title: '<img src="styles/legend/Altresterritoris_3.png" /> Altres territoris'
            });
var format_DominisdelsTrencavell_4 = new ol.format.GeoJSON();
var features_DominisdelsTrencavell_4 = format_DominisdelsTrencavell_4.readFeatures(json_DominisdelsTrencavell_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DominisdelsTrencavell_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DominisdelsTrencavell_4.addFeatures(features_DominisdelsTrencavell_4);
var lyr_DominisdelsTrencavell_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DominisdelsTrencavell_4, 
                style: style_DominisdelsTrencavell_4,
                popuplayertitle: 'Dominis dels Trencavell',
                interactive: true,
                title: '<img src="styles/legend/DominisdelsTrencavell_4.png" /> Dominis dels Trencavell'
            });
var format_readinflunciatolosana_5 = new ol.format.GeoJSON();
var features_readinflunciatolosana_5 = format_readinflunciatolosana_5.readFeatures(json_readinflunciatolosana_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readinflunciatolosana_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readinflunciatolosana_5.addFeatures(features_readinflunciatolosana_5);
var lyr_readinflunciatolosana_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readinflunciatolosana_5, 
                style: style_readinflunciatolosana_5,
                popuplayertitle: 'Àrea d\'influència tolosana',
                interactive: true,
                title: '<img src="styles/legend/readinflunciatolosana_5.png" /> Àrea d\'influència tolosana'
            });
var format_ComtesdeTolosaivassalls_6 = new ol.format.GeoJSON();
var features_ComtesdeTolosaivassalls_6 = format_ComtesdeTolosaivassalls_6.readFeatures(json_ComtesdeTolosaivassalls_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComtesdeTolosaivassalls_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComtesdeTolosaivassalls_6.addFeatures(features_ComtesdeTolosaivassalls_6);
var lyr_ComtesdeTolosaivassalls_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComtesdeTolosaivassalls_6, 
                style: style_ComtesdeTolosaivassalls_6,
                popuplayertitle: 'Comtes de Tolosa i vassalls',
                interactive: true,
                title: '<img src="styles/legend/ComtesdeTolosaivassalls_6.png" /> Comtes de Tolosa i vassalls'
            });
var format_AltresaliatsdeBarcelona_7 = new ol.format.GeoJSON();
var features_AltresaliatsdeBarcelona_7 = format_AltresaliatsdeBarcelona_7.readFeatures(json_AltresaliatsdeBarcelona_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AltresaliatsdeBarcelona_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AltresaliatsdeBarcelona_7.addFeatures(features_AltresaliatsdeBarcelona_7);
var lyr_AltresaliatsdeBarcelona_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AltresaliatsdeBarcelona_7, 
                style: style_AltresaliatsdeBarcelona_7,
                popuplayertitle: 'Altres aliats de Barcelona',
                interactive: true,
                title: '<img src="styles/legend/AltresaliatsdeBarcelona_7.png" /> Altres aliats de Barcelona'
            });
var format_ComtesdeBarcelonaivassalls_8 = new ol.format.GeoJSON();
var features_ComtesdeBarcelonaivassalls_8 = format_ComtesdeBarcelonaivassalls_8.readFeatures(json_ComtesdeBarcelonaivassalls_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComtesdeBarcelonaivassalls_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComtesdeBarcelonaivassalls_8.addFeatures(features_ComtesdeBarcelonaivassalls_8);
var lyr_ComtesdeBarcelonaivassalls_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComtesdeBarcelonaivassalls_8, 
                style: style_ComtesdeBarcelonaivassalls_8,
                popuplayertitle: 'Comtes de Barcelona i vassalls',
                interactive: true,
                title: '<img src="styles/legend/ComtesdeBarcelonaivassalls_8.png" /> Comtes de Barcelona i vassalls'
            });
var format_DucatdAquitnia_9 = new ol.format.GeoJSON();
var features_DucatdAquitnia_9 = format_DucatdAquitnia_9.readFeatures(json_DucatdAquitnia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DucatdAquitnia_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DucatdAquitnia_9.addFeatures(features_DucatdAquitnia_9);
var lyr_DucatdAquitnia_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DucatdAquitnia_9, 
                style: style_DucatdAquitnia_9,
                popuplayertitle: 'Ducat d\'Aquitània',
                interactive: true,
                title: '<img src="styles/legend/DucatdAquitnia_9.png" /> Ducat d\'Aquitània'
            });
var group_Corts1300 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Corts 1300'});
var group_Territoris = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Territoris'});
var group_Territoris1150 = new ol.layer.Group({
                                layers: [lyr_Altresterritoris_3,lyr_DominisdelsTrencavell_4,lyr_readinflunciatolosana_5,lyr_ComtesdeTolosaivassalls_6,lyr_AltresaliatsdeBarcelona_7,lyr_ComtesdeBarcelonaivassalls_8,lyr_DucatdAquitnia_9,],
                                fold: 'open',
                                title: 'Territoris 1150'});
var group_Mapesbase = new ol.layer.Group({
                                layers: [lyr_ESRIWorldImagery_0,lyr_ESRIOcean_1,lyr_ESRITerrain_2,],
                                fold: 'open',
                                title: 'Mapes base'});

lyr_ESRIWorldImagery_0.setVisible(true);lyr_ESRIOcean_1.setVisible(true);lyr_ESRITerrain_2.setVisible(true);lyr_Altresterritoris_3.setVisible(true);lyr_DominisdelsTrencavell_4.setVisible(true);lyr_readinflunciatolosana_5.setVisible(true);lyr_ComtesdeTolosaivassalls_6.setVisible(true);lyr_AltresaliatsdeBarcelona_7.setVisible(true);lyr_ComtesdeBarcelonaivassalls_8.setVisible(true);lyr_DucatdAquitnia_9.setVisible(true);
var layersList = [group_Mapesbase,group_Territoris1150];
lyr_Altresterritoris_3.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_DominisdelsTrencavell_4.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_readinflunciatolosana_5.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_ComtesdeTolosaivassalls_6.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_AltresaliatsdeBarcelona_7.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_ComtesdeBarcelonaivassalls_8.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_DucatdAquitnia_9.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_Altresterritoris_3.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_DominisdelsTrencavell_4.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_readinflunciatolosana_5.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_ComtesdeTolosaivassalls_6.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_AltresaliatsdeBarcelona_7.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_ComtesdeBarcelonaivassalls_8.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_DucatdAquitnia_9.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_Altresterritoris_3.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_DominisdelsTrencavell_4.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_readinflunciatolosana_5.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_ComtesdeTolosaivassalls_6.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'header label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_AltresaliatsdeBarcelona_7.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_ComtesdeBarcelonaivassalls_8.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_DucatdAquitnia_9.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_DucatdAquitnia_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});