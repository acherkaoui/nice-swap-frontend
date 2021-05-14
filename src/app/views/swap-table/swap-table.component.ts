import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
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
    symbol: 'BTC',
    binance: 54000,
    uniswap: 55000.0,
    bittrex: 54050.0,
    pancakeswap: 58000.0,
    swap: 'binance -> pancakeswap',
    benefice: '+7.90%',
  },
];
