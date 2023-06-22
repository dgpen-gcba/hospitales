var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_PuntosdesuministroTodosIncluidoshospitales_1 = new ol.format.GeoJSON();
var features_PuntosdesuministroTodosIncluidoshospitales_1 = format_PuntosdesuministroTodosIncluidoshospitales_1.readFeatures(json_PuntosdesuministroTodosIncluidoshospitales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosdesuministroTodosIncluidoshospitales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosdesuministroTodosIncluidoshospitales_1.addFeatures(features_PuntosdesuministroTodosIncluidoshospitales_1);
var lyr_PuntosdesuministroTodosIncluidoshospitales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuntosdesuministroTodosIncluidoshospitales_1, 
                style: style_PuntosdesuministroTodosIncluidoshospitales_1,
                interactive: true,
                title: '<img src="styles/legend/PuntosdesuministroTodosIncluidoshospitales_1.png" /> Puntos de suministro (Todos - Incluidos hospitales)'
            });
var format_Hospitales_2 = new ol.format.GeoJSON();
var features_Hospitales_2 = format_Hospitales_2.readFeatures(json_Hospitales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitales_2.addFeatures(features_Hospitales_2);
var lyr_Hospitales_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitales_2, 
                style: style_Hospitales_2,
                interactive: true,
                title: '<img src="styles/legend/Hospitales_2.png" /> Hospitales'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_PuntosdesuministroTodosIncluidoshospitales_1.setVisible(true);lyr_Hospitales_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_PuntosdesuministroTodosIncluidoshospitales_1,lyr_Hospitales_2];
lyr_PuntosdesuministroTodosIncluidoshospitales_1.set('fieldAliases', {'nroclie': 'nroclie', 'nombre': 'nombre', 'direccion': 'direccion', 'direccion_': 'direccion_', 'Pais': 'Pais', 'Provincia': 'Provincia', 'Ciudad': 'Ciudad', });
lyr_Hospitales_2.set('fieldAliases', {'nroclie': 'nroclie', 'nombre': 'nombre', 'direccion': 'direccion', 'direccion_': 'direccion_', 'Pais': 'Pais', 'Provincia': 'Provincia', 'Ciudad': 'Ciudad', 'Marca': 'Marca', 'Formula': 'Formula', });
lyr_PuntosdesuministroTodosIncluidoshospitales_1.set('fieldImages', {'nroclie': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'direccion_': 'TextEdit', 'Pais': 'TextEdit', 'Provincia': 'TextEdit', 'Ciudad': 'TextEdit', });
lyr_Hospitales_2.set('fieldImages', {'nroclie': 'TextEdit', 'nombre': 'TextEdit', 'direccion': 'TextEdit', 'direccion_': 'TextEdit', 'Pais': 'TextEdit', 'Provincia': 'TextEdit', 'Ciudad': 'TextEdit', 'Marca': 'TextEdit', 'Formula': 'TextEdit', });
lyr_PuntosdesuministroTodosIncluidoshospitales_1.set('fieldLabels', {'nroclie': 'no label', 'nombre': 'no label', 'direccion': 'no label', 'direccion_': 'no label', 'Pais': 'no label', 'Provincia': 'no label', 'Ciudad': 'no label', });
lyr_Hospitales_2.set('fieldLabels', {'nroclie': 'no label', 'nombre': 'no label', 'direccion': 'no label', 'direccion_': 'no label', 'Pais': 'no label', 'Provincia': 'no label', 'Ciudad': 'no label', 'Marca': 'no label', 'Formula': 'no label', });
lyr_Hospitales_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});