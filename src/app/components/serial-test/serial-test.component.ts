import { Component, OnInit } from '@angular/core';
import * as SerialPort from 'serialport';

@Component({
  selector: 'app-serial-test',
  templateUrl: './serial-test.component.html',
  styleUrls: ['./serial-test.component.scss'],
})
export class SerialTestComponent implements OnInit {
  serialport: SerialPort = window['require']('serialport');

  constructor() { }

  ngOnInit() {
    console.log(this.serialport);
    this.getSerialPorts();
  }

  getSerialPorts() {
    // get list of serial ports
    this.serialport.list().then(ports => {
      ports.forEach(function(port) {
        console.log('Port: ', port);
        console.log('Port PnpID', port.pnpId);
        console.log('Port Manufacturer: ', port.manufacturer);
        console.log('Port Serial Number: ', port.serialNumber);
      });
    });
  }
}
