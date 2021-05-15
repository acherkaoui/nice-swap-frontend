import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Socket } from 'ngx-socket-io';


/**
 * @title Table with pagination
 */

@Component({
  selector: 'app-swap-table',
  templateUrl: './swap-table.component.html',
  styleUrls: ['./swap-table.component.css'],
})
export class SwapTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'symbol',
    'binance',
    'uniswap',
    'bittrex',
    'pancakeswap',
    'swap',
    'benefice',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private socket: Socket) { }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.socket.on('broadcast', (data) => {
      console.log(data)
      this.updateTablePrice(data['symbol'], data['price'])

    });
    this.dataSource.paginator = this.paginator;
  }
  updateTablePrice(symbol, price) {
    console.log(this.dataSource.data.length)
    for (var i = 0; i < this.dataSource.data.length; i++) {
      if(this.dataSource.data[i].symbol == symbol)
      this.dataSource.data[i].binance = price
    }
  }
}


export interface PeriodicElement {
  symbol: string;
  binance: number;
  uniswap: number;
  bittrex: number;
  pancakeswap: number;
  swap: string;
  benefice: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'ETH',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'BNB',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'ADA',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'DOGE',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'USDT',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'XRP',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'DOT',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'ICP',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'BCH',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'UNI',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'LTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'LINK',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'XML',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'USDC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'ETC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'VET',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'SOL',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'EOS',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
  {
    symbol: 'MATIC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
];
