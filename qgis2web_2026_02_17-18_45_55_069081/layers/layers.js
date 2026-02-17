var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
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
var format_VescomtatdeBas_3 = new ol.format.GeoJSON();
var features_VescomtatdeBas_3 = format_VescomtatdeBas_3.readFeatures(json_VescomtatdeBas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VescomtatdeBas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VescomtatdeBas_3.addFeatures(features_VescomtatdeBas_3);
var lyr_VescomtatdeBas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VescomtatdeBas_3, 
                style: style_VescomtatdeBas_3,
                popuplayertitle: 'Vescomtat de Bas',
                interactive: false,
                title: '<img src="styles/legend/VescomtatdeBas_3.png" /> Vescomtat de Bas'
            });
var format_SenyoriudUrtx_4 = new ol.format.GeoJSON();
var features_SenyoriudUrtx_4 = format_SenyoriudUrtx_4.readFeatures(json_SenyoriudUrtx_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SenyoriudUrtx_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SenyoriudUrtx_4.addFeatures(features_SenyoriudUrtx_4);
var lyr_SenyoriudUrtx_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SenyoriudUrtx_4, 
                style: style_SenyoriudUrtx_4,
                popuplayertitle: 'Senyoriu d\'Urtx',
                interactive: false,
                title: '<img src="styles/legend/SenyoriudUrtx_4.png" /> Senyoriu d\'Urtx'
            });
var format_VescomtatdeCardona_5 = new ol.format.GeoJSON();
var features_VescomtatdeCardona_5 = format_VescomtatdeCardona_5.readFeatures(json_VescomtatdeCardona_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VescomtatdeCardona_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VescomtatdeCardona_5.addFeatures(features_VescomtatdeCardona_5);
var lyr_VescomtatdeCardona_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VescomtatdeCardona_5, 
                style: style_VescomtatdeCardona_5,
                popuplayertitle: 'Vescomtat de Cardona',
                interactive: false,
                title: '<img src="styles/legend/VescomtatdeCardona_5.png" /> Vescomtat de Cardona'
            });
var format_VescomtatdeCabrera_6 = new ol.format.GeoJSON();
var features_VescomtatdeCabrera_6 = format_VescomtatdeCabrera_6.readFeatures(json_VescomtatdeCabrera_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VescomtatdeCabrera_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VescomtatdeCabrera_6.addFeatures(features_VescomtatdeCabrera_6);
var lyr_VescomtatdeCabrera_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VescomtatdeCabrera_6, 
                style: style_VescomtatdeCabrera_6,
                popuplayertitle: 'Vescomtat de Cabrera',
                interactive: false,
                title: '<img src="styles/legend/VescomtatdeCabrera_6.png" /> Vescomtat de Cabrera'
            });
var format_VescomtatdeRocabert_7 = new ol.format.GeoJSON();
var features_VescomtatdeRocabert_7 = format_VescomtatdeRocabert_7.readFeatures(json_VescomtatdeRocabert_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VescomtatdeRocabert_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VescomtatdeRocabert_7.addFeatures(features_VescomtatdeRocabert_7);
var lyr_VescomtatdeRocabert_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VescomtatdeRocabert_7, 
                style: style_VescomtatdeRocabert_7,
                popuplayertitle: 'Vescomtat de Rocabertí',
                interactive: false,
                title: '<img src="styles/legend/VescomtatdeRocabert_7.png" /> Vescomtat de Rocabertí'
            });
var format_BaroniadEntena_8 = new ol.format.GeoJSON();
var features_BaroniadEntena_8 = format_BaroniadEntena_8.readFeatures(json_BaroniadEntena_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaroniadEntena_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaroniadEntena_8.addFeatures(features_BaroniadEntena_8);
var lyr_BaroniadEntena_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaroniadEntena_8, 
                style: style_BaroniadEntena_8,
                popuplayertitle: 'Baronia d\'Entença',
                interactive: false,
                title: '<img src="styles/legend/BaroniadEntena_8.png" /> Baronia d\'Entença'
            });
var format_ComtatdUrgell_9 = new ol.format.GeoJSON();
var features_ComtatdUrgell_9 = format_ComtatdUrgell_9.readFeatures(json_ComtatdUrgell_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComtatdUrgell_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComtatdUrgell_9.addFeatures(features_ComtatdUrgell_9);
var lyr_ComtatdUrgell_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComtatdUrgell_9, 
                style: style_ComtatdUrgell_9,
                popuplayertitle: 'Comtat d\'Urgell',
                interactive: true,
                title: '<img src="styles/legend/ComtatdUrgell_9.png" /> Comtat d\'Urgell'
            });
var group_Corts1250 = new ol.layer.Group({
                                layers: [lyr_VescomtatdeBas_3,lyr_SenyoriudUrtx_4,lyr_VescomtatdeCardona_5,lyr_VescomtatdeCabrera_6,lyr_VescomtatdeRocabert_7,lyr_BaroniadEntena_8,lyr_ComtatdUrgell_9,],
                                fold: 'open',
                                title: 'Corts 1250'});
var group_Mapesbase = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,lyr_ESRIOcean_1,lyr_ESRITerrain_2,],
                                fold: 'open',
                                title: 'Mapes base'});

lyr_ESRISatellite_0.setVisible(true);lyr_ESRIOcean_1.setVisible(true);lyr_ESRITerrain_2.setVisible(true);lyr_VescomtatdeBas_3.setVisible(true);lyr_SenyoriudUrtx_4.setVisible(true);lyr_VescomtatdeCardona_5.setVisible(true);lyr_VescomtatdeCabrera_6.setVisible(true);lyr_VescomtatdeRocabert_7.setVisible(true);lyr_BaroniadEntena_8.setVisible(true);lyr_ComtatdUrgell_9.setVisible(true);
var layersList = [group_Mapesbase,group_Corts1250];
lyr_VescomtatdeBas_3.set('fieldAliases', {'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', });
lyr_SenyoriudUrtx_4.set('fieldAliases', {'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', });
lyr_VescomtatdeCardona_5.set('fieldAliases', {'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', });
lyr_VescomtatdeCabrera_6.set('fieldAliases', {'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', });
lyr_VescomtatdeRocabert_7.set('fieldAliases', {'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', });
lyr_BaroniadEntena_8.set('fieldAliases', {'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', });
lyr_ComtatdUrgell_9.set('fieldAliases', {'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', });
lyr_VescomtatdeBas_3.set('fieldImages', {'CODIMUNI': '', 'NOMMUNI': '', 'CAPMUNI': '', 'AREAM5000': '', 'CODICOMAR': '', 'NOMCOMAR': '', 'CAPCOMAR': '', 'CODIVEGUE': '', 'NOMVEGUE': '', 'CAPVEGUE': '', 'CODIPROV': '', 'NOMPROV': '', 'CAPPROV': '', });
lyr_SenyoriudUrtx_4.set('fieldImages', {'CODIMUNI': '', 'NOMMUNI': '', 'CAPMUNI': '', 'AREAM5000': '', 'CODICOMAR': '', 'NOMCOMAR': '', 'CAPCOMAR': '', 'CODIVEGUE': '', 'NOMVEGUE': '', 'CAPVEGUE': '', 'CODIPROV': '', 'NOMPROV': '', 'CAPPROV': '', });
lyr_VescomtatdeCardona_5.set('fieldImages', {'CODIMUNI': '', 'NOMMUNI': '', 'CAPMUNI': '', 'AREAM5000': '', 'CODICOMAR': '', 'NOMCOMAR': '', 'CAPCOMAR': '', 'CODIVEGUE': '', 'NOMVEGUE': '', 'CAPVEGUE': '', 'CODIPROV': '', 'NOMPROV': '', 'CAPPROV': '', });
lyr_VescomtatdeCabrera_6.set('fieldImages', {'CODIMUNI': '', 'NOMMUNI': '', 'CAPMUNI': '', 'AREAM5000': '', 'CODICOMAR': '', 'NOMCOMAR': '', 'CAPCOMAR': '', 'CODIVEGUE': '', 'NOMVEGUE': '', 'CAPVEGUE': '', 'CODIPROV': '', 'NOMPROV': '', 'CAPPROV': '', });
lyr_VescomtatdeRocabert_7.set('fieldImages', {'CODIMUNI': '', 'NOMMUNI': '', 'CAPMUNI': '', 'AREAM5000': '', 'CODICOMAR': '', 'NOMCOMAR': '', 'CAPCOMAR': '', 'CODIVEGUE': '', 'NOMVEGUE': '', 'CAPVEGUE': '', 'CODIPROV': '', 'NOMPROV': '', 'CAPPROV': '', });
lyr_BaroniadEntena_8.set('fieldImages', {'CODIMUNI': '', 'NOMMUNI': '', 'CAPMUNI': '', 'AREAM5000': '', 'CODICOMAR': '', 'NOMCOMAR': '', 'CAPCOMAR': '', 'CODIVEGUE': '', 'NOMVEGUE': '', 'CAPVEGUE': '', 'CODIPROV': '', 'NOMPROV': '', 'CAPPROV': '', });
lyr_ComtatdUrgell_9.set('fieldImages', {'CODIMUNI': '', 'NOMMUNI': '', 'CAPMUNI': '', 'AREAM5000': '', 'CODICOMAR': '', 'NOMCOMAR': '', 'CAPCOMAR': '', 'CODIVEGUE': '', 'NOMVEGUE': '', 'CAPVEGUE': '', 'CODIPROV': '', 'NOMPROV': '', 'CAPPROV': '', });
lyr_VescomtatdeBas_3.set('fieldLabels', {'CODIMUNI': 'no label', 'NOMMUNI': 'no label', 'CAPMUNI': 'no label', 'AREAM5000': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CODIVEGUE': 'no label', 'NOMVEGUE': 'no label', 'CAPVEGUE': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', });
lyr_SenyoriudUrtx_4.set('fieldLabels', {'CODIMUNI': 'no label', 'NOMMUNI': 'no label', 'CAPMUNI': 'no label', 'AREAM5000': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CODIVEGUE': 'no label', 'NOMVEGUE': 'no label', 'CAPVEGUE': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', });
lyr_VescomtatdeCardona_5.set('fieldLabels', {'CODIMUNI': 'no label', 'NOMMUNI': 'no label', 'CAPMUNI': 'no label', 'AREAM5000': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CODIVEGUE': 'no label', 'NOMVEGUE': 'no label', 'CAPVEGUE': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', });
lyr_VescomtatdeCabrera_6.set('fieldLabels', {'CODIMUNI': 'no label', 'NOMMUNI': 'no label', 'CAPMUNI': 'no label', 'AREAM5000': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CODIVEGUE': 'no label', 'NOMVEGUE': 'no label', 'CAPVEGUE': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', });
lyr_VescomtatdeRocabert_7.set('fieldLabels', {'CODIMUNI': 'no label', 'NOMMUNI': 'no label', 'CAPMUNI': 'no label', 'AREAM5000': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CODIVEGUE': 'no label', 'NOMVEGUE': 'no label', 'CAPVEGUE': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', });
lyr_BaroniadEntena_8.set('fieldLabels', {'CODIMUNI': 'no label', 'NOMMUNI': 'no label', 'CAPMUNI': 'no label', 'AREAM5000': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CODIVEGUE': 'no label', 'NOMVEGUE': 'no label', 'CAPVEGUE': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', });
lyr_ComtatdUrgell_9.set('fieldLabels', {'CODIMUNI': 'hidden field', 'NOMMUNI': 'inline label - visible with data', 'CAPMUNI': 'inline label - visible with data', 'AREAM5000': 'inline label - visible with data', 'CODICOMAR': 'hidden field', 'NOMCOMAR': 'hidden field', 'CAPCOMAR': 'hidden field', 'CODIVEGUE': 'hidden field', 'NOMVEGUE': 'inline label - visible with data', 'CAPVEGUE': 'hidden field', 'CODIPROV': 'hidden field', 'NOMPROV': 'inline label - visible with data', 'CAPPROV': 'hidden field', });
lyr_ComtatdUrgell_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});