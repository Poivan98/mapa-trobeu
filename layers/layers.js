ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-1560456.302140, 3512304.770023, 4714932.628958, 6680572.531249]);
var wms_layers = [];


        var lyr_OSMHumanitarian_0 = new ol.layer.Tile({
            'title': 'OSM Humanitarian',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIWorldImagery_1 = new ol.layer.Tile({
            'title': 'ESRI World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIShadedRelief_2 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIWorldHillshade_3 = new ol.layer.Tile({
            'title': 'ESRI World Hillshade',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}.png'
            })
        });
var format_MarsioceansMarineRegions_4 = new ol.format.GeoJSON();
var features_MarsioceansMarineRegions_4 = format_MarsioceansMarineRegions_4.readFeatures(json_MarsioceansMarineRegions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarsioceansMarineRegions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarsioceansMarineRegions_4.addFeatures(features_MarsioceansMarineRegions_4);
var lyr_MarsioceansMarineRegions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarsioceansMarineRegions_4, 
                style: style_MarsioceansMarineRegions_4,
                popuplayertitle: 'Mars i oceans (MarineRegions)',
                interactive: false,
                title: '<img src="styles/legend/MarsioceansMarineRegions_4.png" /> Mars i oceans (MarineRegions)'
            });
var format_Altresterritoris_5 = new ol.format.GeoJSON();
var features_Altresterritoris_5 = format_Altresterritoris_5.readFeatures(json_Altresterritoris_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Altresterritoris_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Altresterritoris_5.addFeatures(features_Altresterritoris_5);
var lyr_Altresterritoris_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Altresterritoris_5, 
                style: style_Altresterritoris_5,
                popuplayertitle: 'Altres territoris',
                interactive: true,
                title: '<img src="styles/legend/Altresterritoris_5.png" /> Altres territoris'
            });
var format_DominisdelsTrencavell_6 = new ol.format.GeoJSON();
var features_DominisdelsTrencavell_6 = format_DominisdelsTrencavell_6.readFeatures(json_DominisdelsTrencavell_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DominisdelsTrencavell_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DominisdelsTrencavell_6.addFeatures(features_DominisdelsTrencavell_6);
var lyr_DominisdelsTrencavell_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DominisdelsTrencavell_6, 
                style: style_DominisdelsTrencavell_6,
                popuplayertitle: 'Dominis dels Trencavell',
                interactive: true,
                title: '<img src="styles/legend/DominisdelsTrencavell_6.png" /> Dominis dels Trencavell'
            });
var format_readinflunciatolosana_7 = new ol.format.GeoJSON();
var features_readinflunciatolosana_7 = format_readinflunciatolosana_7.readFeatures(json_readinflunciatolosana_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readinflunciatolosana_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readinflunciatolosana_7.addFeatures(features_readinflunciatolosana_7);
var lyr_readinflunciatolosana_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readinflunciatolosana_7, 
                style: style_readinflunciatolosana_7,
                popuplayertitle: 'Àrea d\'influència tolosana',
                interactive: true,
                title: '<img src="styles/legend/readinflunciatolosana_7.png" /> Àrea d\'influència tolosana'
            });
var format_ComtesdeTolosaivassalls_8 = new ol.format.GeoJSON();
var features_ComtesdeTolosaivassalls_8 = format_ComtesdeTolosaivassalls_8.readFeatures(json_ComtesdeTolosaivassalls_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComtesdeTolosaivassalls_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComtesdeTolosaivassalls_8.addFeatures(features_ComtesdeTolosaivassalls_8);
var lyr_ComtesdeTolosaivassalls_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComtesdeTolosaivassalls_8, 
                style: style_ComtesdeTolosaivassalls_8,
                popuplayertitle: 'Comtes de Tolosa i vassalls',
                interactive: true,
                title: '<img src="styles/legend/ComtesdeTolosaivassalls_8.png" /> Comtes de Tolosa i vassalls'
            });
var format_AltresaliatsdeBarcelona_9 = new ol.format.GeoJSON();
var features_AltresaliatsdeBarcelona_9 = format_AltresaliatsdeBarcelona_9.readFeatures(json_AltresaliatsdeBarcelona_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AltresaliatsdeBarcelona_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AltresaliatsdeBarcelona_9.addFeatures(features_AltresaliatsdeBarcelona_9);
var lyr_AltresaliatsdeBarcelona_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AltresaliatsdeBarcelona_9, 
                style: style_AltresaliatsdeBarcelona_9,
                popuplayertitle: 'Altres aliats de Barcelona',
                interactive: true,
                title: '<img src="styles/legend/AltresaliatsdeBarcelona_9.png" /> Altres aliats de Barcelona'
            });
var format_ComtesdeBarcelonaivassalls_10 = new ol.format.GeoJSON();
var features_ComtesdeBarcelonaivassalls_10 = format_ComtesdeBarcelonaivassalls_10.readFeatures(json_ComtesdeBarcelonaivassalls_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComtesdeBarcelonaivassalls_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComtesdeBarcelonaivassalls_10.addFeatures(features_ComtesdeBarcelonaivassalls_10);
var lyr_ComtesdeBarcelonaivassalls_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComtesdeBarcelonaivassalls_10, 
                style: style_ComtesdeBarcelonaivassalls_10,
                popuplayertitle: 'Comtes de Barcelona i vassalls',
                interactive: true,
                title: '<img src="styles/legend/ComtesdeBarcelonaivassalls_10.png" /> Comtes de Barcelona i vassalls'
            });
var format_DucatdAquitnia_11 = new ol.format.GeoJSON();
var features_DucatdAquitnia_11 = format_DucatdAquitnia_11.readFeatures(json_DucatdAquitnia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DucatdAquitnia_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DucatdAquitnia_11.addFeatures(features_DucatdAquitnia_11);
var lyr_DucatdAquitnia_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DucatdAquitnia_11, 
                style: style_DucatdAquitnia_11,
                popuplayertitle: 'Ducat d\'Aquitània',
                interactive: true,
                title: '<img src="styles/legend/DucatdAquitnia_11.png" /> Ducat d\'Aquitània'
            });
var format_TopnimsdelaCoronadArag_12 = new ol.format.GeoJSON();
var features_TopnimsdelaCoronadArag_12 = format_TopnimsdelaCoronadArag_12.readFeatures(json_TopnimsdelaCoronadArag_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopnimsdelaCoronadArag_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopnimsdelaCoronadArag_12.addFeatures(features_TopnimsdelaCoronadArag_12);
cluster_TopnimsdelaCoronadArag_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TopnimsdelaCoronadArag_12
});
var lyr_TopnimsdelaCoronadArag_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TopnimsdelaCoronadArag_12, 
                style: style_TopnimsdelaCoronadArag_12,
                popuplayertitle: 'Topònims de la Corona d\'Aragó',
                interactive: true,
                title: '<img src="styles/legend/TopnimsdelaCoronadArag_12.png" /> Topònims de la Corona d\'Aragó'
            });
var group_Topnimscitats = new ol.layer.Group({
                                layers: [lyr_TopnimsdelaCoronadArag_12,],
                                fold: 'open',
                                title: 'Topònims citats'});
var group_Territoris1150 = new ol.layer.Group({
                                layers: [lyr_Altresterritoris_5,lyr_DominisdelsTrencavell_6,lyr_readinflunciatolosana_7,lyr_ComtesdeTolosaivassalls_8,lyr_AltresaliatsdeBarcelona_9,lyr_ComtesdeBarcelonaivassalls_10,lyr_DucatdAquitnia_11,],
                                fold: 'open',
                                title: 'Territoris 1150'});
var group_Mapesbase = new ol.layer.Group({
                                layers: [lyr_OSMHumanitarian_0,lyr_ESRIWorldImagery_1,lyr_ESRIShadedRelief_2,lyr_ESRIWorldHillshade_3,lyr_MarsioceansMarineRegions_4,],
                                fold: 'open',
                                title: 'Mapes base'});

lyr_OSMHumanitarian_0.setVisible(false);lyr_ESRIWorldImagery_1.setVisible(false);lyr_ESRIShadedRelief_2.setVisible(true);lyr_ESRIWorldHillshade_3.setVisible(false);lyr_MarsioceansMarineRegions_4.setVisible(false);lyr_Altresterritoris_5.setVisible(true);lyr_DominisdelsTrencavell_6.setVisible(true);lyr_readinflunciatolosana_7.setVisible(true);lyr_ComtesdeTolosaivassalls_8.setVisible(true);lyr_AltresaliatsdeBarcelona_9.setVisible(true);lyr_ComtesdeBarcelonaivassalls_10.setVisible(true);lyr_DucatdAquitnia_11.setVisible(true);lyr_TopnimsdelaCoronadArag_12.setVisible(false);
var layersList = [group_Mapesbase,group_Territoris1150,group_Topnimscitats];
lyr_MarsioceansMarineRegions_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'latitude': 'latitude', 'longitude': 'longitude', 'min_Y': 'min_Y', 'min_X': 'min_X', 'max_Y': 'max_Y', 'max_X': 'max_X', 'area_km2': 'area_km2', });
lyr_Altresterritoris_5.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_DominisdelsTrencavell_6.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_readinflunciatolosana_7.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_ComtesdeTolosaivassalls_8.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_AltresaliatsdeBarcelona_9.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_ComtesdeBarcelonaivassalls_10.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_DucatdAquitnia_11.set('fieldAliases', {'id': 'id', 'pk_uid': 'pk_uid', 'nom': 'nom', 'Nun_Aut': 'Nun_Aut', 'Color': 'Color', });
lyr_TopnimsdelaCoronadArag_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Link': 'Link', 'link_1': 'link_1', 'Forma documentada': 'Forma documentada', 'Nom actual': 'Nom actual', 'Trobadors': 'Trobadors', 'Nom_mapa': 'Nom_mapa', });
lyr_MarsioceansMarineRegions_4.set('fieldImages', {'fid': '', 'name': '', 'latitude': '', 'longitude': '', 'min_Y': '', 'min_X': '', 'max_Y': '', 'max_X': '', 'area_km2': '', });
lyr_Altresterritoris_5.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_DominisdelsTrencavell_6.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_readinflunciatolosana_7.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_ComtesdeTolosaivassalls_8.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_AltresaliatsdeBarcelona_9.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_ComtesdeBarcelonaivassalls_10.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_DucatdAquitnia_11.set('fieldImages', {'id': 'TextEdit', 'pk_uid': 'TextEdit', 'nom': 'TextEdit', 'Nun_Aut': 'Range', 'Color': 'TextEdit', });
lyr_TopnimsdelaCoronadArag_12.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Link': 'Range', 'link_1': 'TextEdit', 'Forma documentada': 'TextEdit', 'Nom actual': 'TextEdit', 'Trobadors': 'TextEdit', 'Nom_mapa': 'TextEdit', });
lyr_MarsioceansMarineRegions_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'min_Y': 'no label', 'min_X': 'no label', 'max_Y': 'no label', 'max_X': 'no label', 'area_km2': 'no label', });
lyr_Altresterritoris_5.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'hidden field', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_DominisdelsTrencavell_6.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_readinflunciatolosana_7.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_ComtesdeTolosaivassalls_8.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'header label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_AltresaliatsdeBarcelona_9.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_ComtesdeBarcelonaivassalls_10.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'hidden field', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_DucatdAquitnia_11.set('fieldLabels', {'id': 'hidden field', 'pk_uid': 'header label - visible with data', 'nom': 'inline label - visible with data', 'Nun_Aut': 'hidden field', 'Color': 'hidden field', });
lyr_TopnimsdelaCoronadArag_12.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Link': 'hidden field', 'link_1': 'hidden field', 'Forma documentada': 'inline label - visible with data', 'Nom actual': 'inline label - visible with data', 'Trobadors': 'inline label - visible with data', 'Nom_mapa': 'hidden field', });
lyr_TopnimsdelaCoronadArag_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});