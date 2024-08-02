import { prisma } from './database.server'

export async function addExpense({ title, amount, date }) {
  try {
    let user = await prisma.user.findMany()
    console.log('FIRST USER FOUND', user)

    if (user.length === 0) {
      user = await prisma.user.create({
        data: {
          email: "demo@unique.com",
          name: "demostration",
          password: "secret123"
        }
      })
      user = [user]
      console.log('USER JUST CREATED', user)
    }
    return await prisma.expense.create({
      data: {
        title: title,
        amount: +amount,
        date: new Date(date),
        userId: user[0].id
      }
    })
  } catch (error) {
    throw new Error('Could not save expense', error)
  }
}