import { HTTPBaseService } from '../base'

interface MakePhotoInput {
  specCode: string
  imageBase64: string
}

interface Photo {
  code: number
  issues: string[]
  message: string
  originalPhotoUrl: string
  photoUrl: string
  photoUuid: string
  waterMark: boolean
  watermarkPhotoUrl: string
}

interface PhotoData {
  photoUuid: string
  idPhotoTempWatermarkPhotoUrl: string
  specCode: string
  siteDomain: string
  fileSize: number
  issues: string[]
  browserSignature: string
  platform: string
  gitVersion: string
}

interface AddPhotoResult {
  photoUuid: string
}

interface PhotoInfo {
  idPhotoTempResultPhotoUrl?: string
  idPhotoTempWatermarkPhotoUrl: string
  photoUuid: string
  specCode: string
}

interface RemakePhotoPayload {
  originalOrderId: string
  browserSignature: string
  newPhotoImageBase64: string
}

export interface RemakePhotoResult {
  code: number
  issues: Array<string>
  message: string
  photoDpi: number
  photoHeightMm: number
  photoHeightPx: number
  photoUrl: string
  photoUrlHd: string
  photoUuid: string
  photoWidthMm: number
  photoWidthPx: number
  waterMark: boolean
}

export interface RemakePhotoInvalidResult {
  code: number
  issues: Array<string>
  message: string
  waterMark: boolean
}

class SimpleService extends HTTPBaseService {
  constructor(baseUrl: string) {
    super(baseUrl)
  }

  public makePhoto(data: MakePhotoInput) {
    return this.post<Photo, MakePhotoInput>('', data)
  }
}

class PhotoService extends HTTPBaseService {
  constructor() {
    super()
  }

  public async makePhoto({ specCode, imageBase64 }: MakePhotoInput) {
    const { signedUrl } = await this.get<{ signedUrl: string }>('/get-signed-url', {
      params: {
        specCode,
      },
    })

    const simpleService = new SimpleService(signedUrl)
    return simpleService.makePhoto({ specCode, imageBase64 })
  }

  public addPhoto(data: PhotoData) {
    return this.post<AddPhotoResult>('/photo', data)
  }

  public async getPhoto(orderId: string) {
    return await this.get<PhotoInfo>(`/photo/${orderId}`)
  }

  public async remakePhoto(data: RemakePhotoPayload) {
    return this.post<RemakePhotoResult | RemakePhotoInvalidResult>('/photo/remake', data)
  }
}

export const photoService = new PhotoService()
