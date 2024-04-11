export type ProductData = {

    id: number,
    attributes: {
      price: string,
      oldPrice: string,
      title: string,
      isNew: boolean,
      image: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
}
