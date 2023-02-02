import {
  IsMongoId,
  IsString,
  Length,
  IsInt,
  Min,
  Max
} from 'class-validator';

export default class CreateCommentDto {
  @IsString({ message: 'comment is required' })
  @Length(5, 1024, { message: 'Min length is 5, max is 1024' })
  public comment!: string;

  @IsMongoId({ message: 'offerId field must be a valid id' })
  public offerId!: string;

  @IsMongoId({ message: 'userId field must be a valid id' })
  public host!: string;

  @IsInt({ message: 'Rating must be an integer' })
  @Min(1, { message: 'Minimum rating is 1' })
  @Max(5, { message: 'Maximum rating is 5' })
  public rating!: number;
}
