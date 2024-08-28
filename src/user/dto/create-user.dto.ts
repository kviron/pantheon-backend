import {
	IsDate,
	IsEmail,
	IsNotEmpty,
	IsPhoneNumber,
	IsString,
	MinLength
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Gender, Role } from '@prisma/client'

export class CreateUserDto {
	@ApiProperty()
	@IsEmail()
	@IsNotEmpty()
	email: string

	@ApiProperty()
	@IsNotEmpty()
	testField: string

	@ApiProperty()
	@IsNotEmpty()
	@MinLength(8)
	password: string

	@ApiProperty({ required: false })
	nikName: string

	@ApiProperty({ required: false })
	@IsPhoneNumber()
	phoneNumber: string

	@ApiProperty({ required: false })
	gender: Gender

	@ApiProperty({ required: false })
	@IsString()
	role: Role

	@ApiProperty({ required: false })
	@IsDate()
	dateOfBirth: string
}
