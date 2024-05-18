import { Component, EventEmitter, Output } from '@angular/core';
import { ColorOption } from '../../interfaces/color-option'
@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent {
  @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();;

  categories: string[] = [
    'All',
    'Movies',
    'Sport',
    'Nature',
    'Floral',
    'Travel'];
  colors: ColorOption[] = [
    { label: 'Red', value: '#FF0000' },
    { label: 'Green', value: '#00FF00' },
    { label: 'Blue', value: '#0000FF' },
    { label: 'Yellow', value: '#FFFF00' },
    { label: 'Cyan', value: '#00FFFF' },
    { label: 'Magenta', value: '#FF00FF' },
    { label: 'Orange', value: '#FFA500' },
    { label: 'Purple', value: '#800080' },
    { label: 'Lime', value: '#00FF00' },
    { label: 'Pink', value: '#FFC0CB' },
    { label: 'Teal', value: '#008080' },
    { label: 'Brown', value: '#A52A2A' }
  ];
  orientations: string[] = ['All', 'Vertical', 'Horizontal'];
  types: string[] = ['All', 'Drawing', 'Illustration', 'Painting', 'Photography', 'Text'];

  selectedCategory: string = this.categories[0];
  selectedColor: ColorOption = this.colors[0];
  selectedOrientation: string = this.orientations[0];
  selectedType: string = this.types[0];

  selectColor(color: ColorOption) {
    this.selectedColor = color;
    this.onApplyFilter()
  }
  onApplyFilter() {
    this.onFilter.emit({
      category: this.selectedCategory,
      color: this.selectedColor.label,
      orientation: this.selectedOrientation,
      type: this.selectedType
    });
  }
}
