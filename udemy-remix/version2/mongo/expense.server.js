import { prisma } from './database.server'

export async function addExpense({ title, amount, date }) {
  try {
    let user = await prisma.user.findMany()
    //console.log('FIRST USER FOUND', user)

    if (user.length === 0) {
      user = await prisma.user.create({
        data: {
          email: "demo@unique.com",
          name: "demostration",
          password: "secret123"
        }
      })
      user = [user]
      //console.log('USER JUST CREATED', user)
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

export async function getExpense() {
  try {
    return await prisma.expense.findMany({ orderBy: { dateAdded: 'desc' } })
  } catch (error) {
    throw new Error('Could not get any expense', error)
  }
}

export async function getOneExpense(id) {
  try {
    return await prisma.expense.findFirstOrThrow({ where: { id } })
  } catch (error) {
    throw new Error('Could not find the specific expense', error)
  }
}

export async function updateExpense(id, expenseData) {
  try {
    return await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      }
    })
  } catch (error) {
    throw new Error('Could not update the specific expense', error)
  }
}

export async function deleteExpense(id) {
  try {
    return await prisma.expense.delete({ where: { id } })
  } catch (error) {
    throw new Error('Could not delete specific expense', error)
  }
}