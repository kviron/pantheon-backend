import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateUserDto } from './create-user.dto'
import {
	IsDateString,
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsPhoneNumber
} from 'class-validator'
import { Gender } from '@prisma/client'
import { Transform } from 'class-transformer'

export class UpdateUserDto extends PartialType(CreateUserDto) {
	@ApiProperty()
	@IsEmail()
	@IsNotEmpty()
	email: string

	@IsOptional()
	name?: string

	@IsOptional()
	@IsPhoneNumber()
	phoneNumber?: string

	@IsOptional()
	@IsDateString()
	dateOfBirth?: string

	@IsOptional()
	@IsEnum(Gender)
	@Transform(value => ('' + value).toLowerCase())
	gender?: Gender
}
