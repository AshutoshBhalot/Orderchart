import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-charts-youtube';

  lineChart: any; // Declare lineChart as any type

  constructor() {
    // Initialize your chart here (replace with your actual chart initialization code)
    this.lineChart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'DATA'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'DATA VISUALIZATION',
          data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
        } as any
      ]
    });
  }

  // Add a data array to hold all data points
  data: number[] = [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16];

  // Initialize selectedTimeline with "all"
  selectedTimeline: string = 'all';

  addDataPoint() {
    const newDataPoint = Math.floor(Math.random() * 20) + 1;
    this.data.push(newDataPoint);

    // Update the chart's series directly
    this.lineChart.ref.series[0].addPoint(newDataPoint);

    this.filterChart(); // Call the filter function after adding a new point
  }

  filterChart() {
    const timeline = parseInt(this.selectedTimeline, 10);

    if (this.selectedTimeline === 'all') {
      // Reset the timeline to show all data
      this.lineChart.ref.xAxis[0].setExtremes(null, null);
    } else {
      // Calculate the starting point based on the selected timeline
      const startIndex = Math.max(0, this.data.length - timeline);
      const endIndex = this.data.length - 1;

      // Set the timeline for the chart
      this.lineChart.ref.xAxis[0].setExtremes(startIndex, endIndex);
    }
  }
}
