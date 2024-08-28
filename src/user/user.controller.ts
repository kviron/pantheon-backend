import { Controller, Get, HttpCode, Param } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '@prisma/client'
import { ApiOperation } from '@nestjs/swagger'

@Controller('users')
export class UserController {
	constructor(private readonly usersService: UserService) {}

	@Get('/')
	@ApiOperation({ summary: 'Get user list' })
	@HttpCode(200)
	async findAll(): Promise<User[]> {
		return this.usersService.getList()
	}

	@Get('/:id')
	@ApiOperation({ summary: 'Get user by id' })
	@HttpCode(200)
	async getById(@Param('id') id: string): Promise<User> {
		return this.usersService.getById(id)
	}
}
