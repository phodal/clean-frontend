import { ContentModel } from './content.model';

class VO<T> {

}

export class ContentVO extends VO<ContentModel> {
  floatLabel: string;
  hideRequired: boolean;
  placeholder: string;
  select: string;

  private constructor(props: ContentModel) {
    super();
    this.floatLabel = props.floatLabel;
    this.hideRequired = props.hideRequired;
    this.placeholder = props.placeholder;
    this.select = props.select;
  }

  static create(params: ContentModel): Promise<any> {
    if (params.placeholder === '') {
      return new Promise(((resolve, reject) => {
        reject({
          error: 'Empty PlaceHolder'
        });
      }));
    } else {
      return new Promise((resolve => {
        resolve(new ContentVO(params));
      }));
    }
  }
}
