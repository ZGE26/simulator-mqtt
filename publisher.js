const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
    console.log('✅ Publisher connected to MQTT Broker');
    setInterval(() => {
        const data = {
            temperature: (20 + Math.random() * 10).toFixed(2),
            humidity: (50 + Math.random() * 10).toFixed(2),
            soilTemperature: (18 + Math.random() * 7).toFixed(2),
            time: new Date().toISOString()
        };
        client.publish('sensor/data', JSON.stringify(data));
        console.log(`Data sent: ${JSON.stringify(data)}`);
    }, 10000);
});
