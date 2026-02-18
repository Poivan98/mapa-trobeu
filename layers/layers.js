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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
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
var group_Corts1300 = new ol.layer.Group({
                                layers: [lyr_VescomtatdeBas_3,lyr_SenyoriudUrtx_4,lyr_VescomtatdeCardona_5,lyr_VescomtatdeCabrera_6,lyr_VescomtatdeRocabert_7,lyr_BaroniadEntena_8,lyr_ComtatdUrgell_9,],
                                fold: 'open',
                                title: 'Corts 1300'});
var group_Mapesbase = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,lyr_ESRIOcean_1,lyr_ESRITerrain_2,],
                                fold: 'open',
                                title: 'Mapes base'});

lyr_ESRISatellite_0.setVisible(true);lyr_ESRIOcean_1.setVisible(true);lyr_ESRITerrain_2.setVisible(true);lyr_VescomtatdeBas_3.setVisible(true);lyr_SenyoriudUrtx_4.setVisible(true);lyr_VescomtatdeCardona_5.setVisible(true);lyr_VescomtatdeCabrera_6.setVisible(true);lyr_VescomtatdeRocabert_7.setVisible(true);lyr_BaroniadEntena_8.setVisible(true);lyr_ComtatdUrgell_9.setVisible(true);
var layersList = [group_Mapesbase,group_Corts1300];
lyr_VescomtatdeBas_3.set('fieldAliases', {'CODI': 'CODI', 'Cort': 'Cort', 'Titular': 'Titular', 'Trobadors relacionats': 'Trobadors relacionats', 'Enllaç NARPAN': 'Enllaç NARPAN', });
lyr_SenyoriudUrtx_4.set('fieldAliases', {'CODI': 'CODI', 'Cort': 'Cort', 'Titular': 'Titular', 'Trobadors relacionats': 'Trobadors relacionats', 'Enllaç NARPAN': 'Enllaç NARPAN', });
lyr_VescomtatdeCardona_5.set('fieldAliases', {'CODI': 'CODI', 'Cort': 'Cort', 'Titular': 'Titular', 'Trobadors relacionats': 'Trobadors relacionats', 'Enllaç NARPAN': 'Enllaç NARPAN', });
lyr_VescomtatdeCabrera_6.set('fieldAliases', {'CODI': 'CODI', 'Cort': 'Cort', 'Titular': 'Titular', 'Trobadors relacionats': 'Trobadors relacionats', 'Enllaç NARPAN': 'Enllaç NARPAN', });
lyr_VescomtatdeRocabert_7.set('fieldAliases', {'CODI': 'CODI', 'Cort': 'Cort', 'Titular': 'Titular', 'Trobadors relacionats': 'Trobadors relacionats', 'Enllaç NARPAN': 'Enllaç NARPAN', });
lyr_BaroniadEntena_8.set('fieldAliases', {'CODI': 'CODI', 'Cort': 'Cort', 'Titular': 'Titular', 'Trobadors relacionats': 'Trobadors relacionats', 'Enllaç NARPAN': 'Enllaç NARPAN', });
lyr_ComtatdUrgell_9.set('fieldAliases', {'CODIMUNI': 'CODIMUNI', 'Cort': 'Cort', 'Titular': 'Titular', 'Trobadors relacionats': 'Trobadors relacionats', 'Enllaç NARPAN': 'Enllaç NARPAN', 'Prova': 'Prova', });
lyr_VescomtatdeBas_3.set('fieldImages', {'CODI': '', 'Cort': '', 'Titular': '', 'Trobadors relacionats': '', 'Enllaç NARPAN': '', });
lyr_SenyoriudUrtx_4.set('fieldImages', {'CODI': '', 'Cort': '', 'Titular': '', 'Trobadors relacionats': '', 'Enllaç NARPAN': '', });
lyr_VescomtatdeCardona_5.set('fieldImages', {'CODI': '', 'Cort': '', 'Titular': '', 'Trobadors relacionats': '', 'Enllaç NARPAN': '', });
lyr_VescomtatdeCabrera_6.set('fieldImages', {'CODI': '', 'Cort': '', 'Titular': '', 'Trobadors relacionats': '', 'Enllaç NARPAN': '', });
lyr_VescomtatdeRocabert_7.set('fieldImages', {'CODI': '', 'Cort': '', 'Titular': '', 'Trobadors relacionats': '', 'Enllaç NARPAN': '', });
lyr_BaroniadEntena_8.set('fieldImages', {'CODI': '', 'Cort': '', 'Titular': '', 'Trobadors relacionats': '', 'Enllaç NARPAN': '', });
lyr_ComtatdUrgell_9.set('fieldImages', {'CODIMUNI': '', 'Cort': '', 'Titular': '', 'Trobadors relacionats': '', 'Enllaç NARPAN': '', 'Prova': '', });
lyr_VescomtatdeBas_3.set('fieldLabels', {'CODI': 'hidden field', 'Cort': 'inline label - visible with data', 'Titular': 'inline label - visible with data', 'Trobadors relacionats': 'inline label - visible with data', 'Enllaç NARPAN': 'inline label - visible with data', });
lyr_SenyoriudUrtx_4.set('fieldLabels', {'CODI': 'hidden field', 'Cort': 'inline label - visible with data', 'Titular': 'inline label - visible with data', 'Trobadors relacionats': 'inline label - visible with data', 'Enllaç NARPAN': 'inline label - visible with data', });
lyr_VescomtatdeCardona_5.set('fieldLabels', {'CODI': 'hidden field', 'Cort': 'inline label - visible with data', 'Titular': 'inline label - visible with data', 'Trobadors relacionats': 'inline label - visible with data', 'Enllaç NARPAN': 'inline label - visible with data', });
lyr_VescomtatdeCabrera_6.set('fieldLabels', {'CODI': 'hidden field', 'Cort': 'inline label - visible with data', 'Titular': 'inline label - visible with data', 'Trobadors relacionats': 'inline label - visible with data', 'Enllaç NARPAN': 'inline label - visible with data', });
lyr_VescomtatdeRocabert_7.set('fieldLabels', {'CODI': 'hidden field', 'Cort': 'inline label - visible with data', 'Titular': 'inline label - visible with data', 'Trobadors relacionats': 'inline label - visible with data', 'Enllaç NARPAN': 'inline label - visible with data', });
lyr_BaroniadEntena_8.set('fieldLabels', {'CODI': 'hidden field', 'Cort': 'inline label - visible with data', 'Titular': 'inline label - visible with data', 'Trobadors relacionats': 'inline label - visible with data', 'Enllaç NARPAN': 'inline label - visible with data', });
lyr_ComtatdUrgell_9.set('fieldLabels', {'CODIMUNI': 'hidden field', 'Cort': 'inline label - visible with data', 'Titular': 'inline label - visible with data', 'Trobadors relacionats': 'inline label - visible with data', 'Enllaç NARPAN': 'inline label - visible with data', 'Prova': 'inline label - visible with data', });
lyr_ComtatdUrgell_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});