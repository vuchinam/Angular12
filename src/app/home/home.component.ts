import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Tohka Rin';
  public age = 25;
  public fruits = [
    { name: 'Guava', price: 7000 },
    { name: 'Mango', price: 4000 },
    { name: 'watermelon', price: 6000 },
    { name: 'Grape', price: 8000 },
    { name: 'Apple', price: 3000 },
  ];

  public countryData = [
    { city: 'Chọn thành phố', district: [] },
    {
      city: 'Bắc Giang',
      district: [
        'Thành phố Bắc Giang',
        'Huyện Hiệp Hòa',
        'Huyện Lạng Giang',
        'Huyện Lục Nam',
        'Huyện Lục Ngạn',
        'Huyện Sơn Động',
        'Huyện Tân Yên',
        'Huyện Việt Yên',
        'Huyện Yên Dũng',
        'Huyện Yên Thế',
      ],
    },
    {
      city: 'Bắc Ninh',
      district: [
        'Thành phố Bắc Ninh',
        'Thị xã Từ Sơn',
        'Huyện Gia Bình',
        'Huyện Lương Tài',
        'Huyện Quế Võ',
        'Huyện Thuận Thành',
        'Huyện Tiên Du',
        'Huyện Yên Phong',
      ],
    },
    {
      city: 'Hà Nội',
      district: [
        'Quận Ba Đình',
        'Huyện Ba Vì',
        'Quận Bắc Từ Liêm',
        'Quận Cầu Giấy',
        'Huyện Chương Mỹ',
        'Huyện Đan Phượng',
        'Huyện Đông Anh',
        'Quận Đống Đa',
        'Huyện Gia Lâm',
        'Quận Hà Đông',
        'Quận Hai Bà Trưng',
        'Huyện Hoài Đức',
        'Quận Hoàn Kiếm',
        'Quận Hoàng Mai',
        'Quận Long Biên',
        'Huyện Mê Linh',
        'Huyện Mỹ Đức',
        'Quận Nam Từ Liêm',
        'Huyện Phú Xuyên',
        'Huyện Phúc Thọ',
        'Huyện Quốc Oai',
        'Huyện Sóc Sơn',
        'Thị xã Sơn Tây',
        'Quận Tây Hồ',
        'Huyện Thạch Thất',
        'Huyện Thanh Oai',
        'Huyện Thanh Trì',
        'Quận Thanh Xuân',
        'Huyện Thường Tín',
        'Huyện Ứng Hòa',
      ],
    },
    {
      city: 'Hà Tĩnh',
      district: [
        'Thành phố Hà Tĩnh',
        'Thị xã Hồng Lĩnh',
        'Thị xã Kỳ Anh',
        'Huyện Cẩm Xuyên',
        'Huyện Can Lộc',
        'Huyện Đức Thọ',
        'Huyện Hương Khê',
        'Huyện Hương Sơn',
        'Huyện Lộc Hà',
        'Huyện Nghi Xuân',
        'Huyện Thạch Hà',
        'Huyện Vũ Quang',
      ],
    },
  ];

  public districts: string[] = [];

  constructor() {}

  public ngOnInit(): void {
    console.log('countryData = ', this.countryData);
  }

  public changeCountry(e: any): void {
    const city = e.target.value;
    if (!city) return;

    //ex: 1
    // const search = this.countryData.filter((data) => data.city === city);
    // if (search.length > 0) {
    //   this.districts = search[0].district;
    // }

    //ex: 2
    this.districts =
      this.countryData.find((data) => data.city === city)?.district || [];
  }
}
