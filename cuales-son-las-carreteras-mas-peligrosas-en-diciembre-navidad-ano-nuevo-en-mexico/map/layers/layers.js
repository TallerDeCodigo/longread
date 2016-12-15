var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_zonas_con_ms_accidentes_2014 = new ol.format.GeoJSON();
var features_zonas_con_ms_accidentes_2014 = format_zonas_con_ms_accidentes_2014.readFeatures(geojson_zonas_con_ms_accidentes_2014, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas_con_ms_accidentes_2014 = new ol.source.Vector();
jsonSource_zonas_con_ms_accidentes_2014.addFeatures(features_zonas_con_ms_accidentes_2014);var lyr_zonas_con_ms_accidentes_2014 = new ol.layer.Vector({
                source:jsonSource_zonas_con_ms_accidentes_2014, 
                style: style_zonas_con_ms_accidentes_2014,
                title: "zonas_con_más_accidentes_2014"
            });var format_zonas_con_ms_accidentes_2015 = new ol.format.GeoJSON();
var features_zonas_con_ms_accidentes_2015 = format_zonas_con_ms_accidentes_2015.readFeatures(geojson_zonas_con_ms_accidentes_2015, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas_con_ms_accidentes_2015 = new ol.source.Vector();
jsonSource_zonas_con_ms_accidentes_2015.addFeatures(features_zonas_con_ms_accidentes_2015);var lyr_zonas_con_ms_accidentes_2015 = new ol.layer.Vector({
                source:jsonSource_zonas_con_ms_accidentes_2015, 
                style: style_zonas_con_ms_accidentes_2015,
                title: "zonas_con_más_accidentes_2015"
            });

lyr_zonas_con_ms_accidentes_2014.setVisible(true);lyr_zonas_con_ms_accidentes_2015.setVisible(true);
var layersList = [baseLayer,lyr_zonas_con_ms_accidentes_2014,lyr_zonas_con_ms_accidentes_2015];
lyr_zonas_con_ms_accidentes_2014.set('fieldAliases', {'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Cve_Ent': 'Cve_Ent', 'Cve_Mun': 'Cve_Mun', 'Nom_Ent': 'Nom_Ent', 'Nom_Mun': 'Nom_Mun', 'Tipo_Vial': 'Tipo_Vial', 'Nom_Vial': 'Nom_Vial', 'Num_Vial': 'Num_Vial', 'Recubrimiento': 'Recubrimiento', 'Carriles': 'Carriles', 'Peaje': 'Peaje', 'Administra': 'Administra', 'Jurisdicción': 'Jurisdicción', 'Circulación': 'Circulación', 'Velocidad': 'Velocidad', });
lyr_zonas_con_ms_accidentes_2015.set('fieldAliases', {'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Cve_Ent': 'Cve_Ent', 'Cve_Mun': 'Cve_Mun', 'Nom_Ent': 'Nom_Ent', 'Nom_Mun': 'Nom_Mun', 'Tipo_Vial': 'Tipo_Vial', 'Nom_Vial': 'Nom_Vial', 'Num_Vial': 'Num_Vial', 'Recubrimiento': 'Recubrimiento', 'Carriles': 'Carriles', 'Peaje': 'Peaje', 'Administra': 'Administra', 'Jurisdicción': 'Jurisdicción', 'Circulación': 'Circulación', 'Velocidad': 'Velocidad', });
lyr_zonas_con_ms_accidentes_2014.set('fieldImages', {'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Cve_Ent': 'TextEdit', 'Cve_Mun': 'TextEdit', 'Nom_Ent': 'TextEdit', 'Nom_Mun': 'TextEdit', 'Tipo_Vial': 'TextEdit', 'Nom_Vial': 'TextEdit', 'Num_Vial': 'TextEdit', 'Recubrimiento': 'TextEdit', 'Carriles': 'TextEdit', 'Peaje': 'TextEdit', 'Administra': 'TextEdit', 'Jurisdicción': 'TextEdit', 'Circulación': 'TextEdit', 'Velocidad': 'TextEdit', });
lyr_zonas_con_ms_accidentes_2015.set('fieldImages', {'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Cve_Ent': 'TextEdit', 'Cve_Mun': 'TextEdit', 'Nom_Ent': 'TextEdit', 'Nom_Mun': 'TextEdit', 'Tipo_Vial': 'TextEdit', 'Nom_Vial': 'TextEdit', 'Num_Vial': 'TextEdit', 'Recubrimiento': 'TextEdit', 'Carriles': 'TextEdit', 'Peaje': 'TextEdit', 'Administra': 'TextEdit', 'Jurisdicción': 'TextEdit', 'Circulación': 'TextEdit', 'Velocidad': 'TextEdit', });
lyr_zonas_con_ms_accidentes_2014.set('fieldLabels', {'Longitud': 'header label', 'Latitud': 'header label', 'Cve_Ent': 'header label', 'Cve_Mun': 'header label', 'Nom_Ent': 'header label', 'Nom_Mun': 'header label', 'Tipo_Vial': 'header label', 'Nom_Vial': 'header label', 'Num_Vial': 'header label', 'Recubrimiento': 'header label', 'Carriles': 'header label', 'Peaje': 'header label', 'Administra': 'header label', 'Jurisdicción': 'header label', 'Circulación': 'header label', 'Velocidad': 'header label', });
lyr_zonas_con_ms_accidentes_2015.set('fieldLabels', {'Longitud': 'header label', 'Latitud': 'header label', 'Cve_Ent': 'header label', 'Cve_Mun': 'header label', 'Nom_Ent': 'header label', 'Nom_Mun': 'header label', 'Tipo_Vial': 'header label', 'Nom_Vial': 'header label', 'Num_Vial': 'header label', 'Recubrimiento': 'header label', 'Carriles': 'header label', 'Peaje': 'header label', 'Administra': 'header label', 'Jurisdicción': 'header label', 'Circulación': 'header label', 'Velocidad': 'header label', });
