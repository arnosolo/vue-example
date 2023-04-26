import { HTTPBaseService } from '../base'

interface FailedResult {
  code: string
  message: string
}

interface AddPhotoPayload {
  imageBase64: string
}

interface AddPhotoResult {
  id: string
  imageBase64: string
}

interface GetPhotoResult {
  imageBase64: string
}

class PhotoService extends HTTPBaseService {
  constructor() {
    super()
  }

  public addPhoto(payload: AddPhotoPayload) {
    return this.post<AddPhotoResult | FailedResult>('/photo', payload)
  }

  public getPhoto(id: string) {
    return this.get<GetPhotoResult | FailedResult>(`/photo/${id}`)
  }
}

export const photoService = new PhotoService()
