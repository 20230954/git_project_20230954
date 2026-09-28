package com.example.a2th

import org.junit.Test
import org.junit.Assert.*

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {
    @Test
    fun addition_isCorrect() {
        assertEquals(4, 2 + 2)

        var numOne = 1
        var numTwo = 3000000000L // 30억은 Int 범위를 초과하므로 끝에 L을 붙여 Long 타입으로 지정
        var byByte: Byte = 1
        var myInt: Int = 20
        val myFloat = 30.2F
        val myDouble = 35.4
        var myBoolean : Boolean = true
        var myChar1 : Char = 'K' //변수 myChar1에 문자 값 'K'를 저장
        var myChar2 : Char = 'o' //변수 myChar2에 문자 값 'o'를 저장
        var myChar3 : Char = 't' //변수 myChar3에 문자 값 't'를 저장
        var myChar4 : Char = 'l' //변수 myChar4에 문자 값 'l'를 저장
        var myChar5 : Char = 'i' //변수 myChar5에 문자 값 'i'를 저장
        var myChar6 : Char = 'n' //변수 myChar6에 문자 값 'n'를 저장
        var myArray: IntArray = intArrayOf(1,2,3,4,5)

        println("코틀린 : 정수 자료형 numOne : $numOne")
        println("코틀린 : 정수 자료형 numTwo : $numTwo")
        println("코틀린 : 정수 자료형 byByte : $byByte")
        println("코틀린 : 정수 자료형 myInt : $myInt")
        println("코틀린 : 실수 자료형 FLoat : " + myFloat)
        println("코틀린 : 실수 자료형 Double : " + myDouble)
        println("코틀린 : 부울린 자료형 Boolean : " + myBoolean)
        println("코틀린 : 문자 자료형  Char : " + myChar1 + myChar2 + myChar3 + myChar4 + myChar5 + myChar6)
        println("코틀린 : 배열 자료형 배열의 3번째 값 : " + myArray[2])

        var myX: Int = 100
        var myY: Float = myX.toFloat()

        println("코틀린 : 자료형 변환 - Int : $myX")
        println("코틀린 : 자료형 변환 - Float : $myY")

        var x: Int = 5
        var y: Int = 10

        println("코틀린 : 산술 연산자 x + y = " + (x + y))
        println("코틀린 : 산술 연산자 x - y = " + (x - y))
        println("코틀린 : 산술 연산자 x / y = " + (x / y))
        println("코틀린 : 산술 연산자 x * y = " + (x * y))
        println("코틀린 : 산술 연산자 x % y = " + (x % y))

        println("코틀린 : 비교 연산자 x > y = " + (x > y))
        println("코틀린 : 비교 연산자 x < y = " + (x < y))
        println("코틀린 : 비교 연산자 x >= y = " + (x >= y))
        println("코틀린 : 비교 연산자 x <= y = " + (x <= y))
        println("코틀린 : 비교 연산자 x == y = " + (x == y))
        println("코틀린 : 비교 연산자 x != y = " + (x != y))

        y += x
        println("코틀린 : 할당 연산자 y += x => y = $y")

        y -= x
        println("코틀린 : 할당 연산자 y -= x => y = $y")

        y *= x
        println("코틀린 : 할당 연산자 y *= x => y = $y")

        y /= x
        println("코틀린 : 할당 연산자 y /= x => y = $y")

        y %= x
        println("코틀린 : 할당 연산자 y %= x => y = $y")


        x = 1
        println("코틀린 : 증감 연산자 ++x = ${++x}")
        println("코틀린 : 증감 연산자 --x = ${--x}")

        var num: Int = 10

        if (num % 2 == 0) {
            println("코틀린 : if-else 조건문 숫자 " + num + "은 짝수")
        } else {
            println("코틀린 : if-else 조건문 숫자 " + num + "은 홀수")
        }

        var result : String
        if (num > 0) {
            result = "숫자 " + num + "은 양수"
        } else if (num == 0) {
            result = "숫자 " + num + "은 0"
        } else {
            result = "숫자 " + num + "은 음수"
        }

        println("코틀린 : if-else if 조건문 $result")

        if (num > 0) {
            if (num % 2 == 0) {
                result = "숫자 " + num + "은 양수이고 짝수"
            } else {
                result = "숫자 " + num + "은 양수이고 홀수"
            }
        } else {
            if (num % 2 == 0){
                result = "숫자 " + num + "은 음수이고 짝수"
            } else {
                result = "숫자 " + num + "은 음수이고 홀수"
            }
        }
        println("코틀린 : 중첩 if 조건문 $result")

        var day: Int = 2

        when (day) {
            1 -> result = "Monday"
            2 -> result = "Tuesday"
            3 -> result = "Wednesday"
            4 -> result = "Thursday"
            5 -> result = "Friday"
            6 -> result = "Saturday"
            7 -> result = "Sunday"
            else -> result = "Invalid day"
        }

        println("코틀린 : when 조건문 $result")

        for (i in 5 downTo 1 step 2) {
            println("코틀린 : for 반복문 반복변수 : $i")
        }
        var numbers = arrayOf(1, 2, 3, 4, 5)
        for (i in numbers){
            if(i % 2 == 1){
                println("코틀린 : for 반복문 , 반복 변수 : " + i)
            }
        }
        val score = 91
        val nakp = 80

        if (nakp < 80) {
            println("F학점(낙제)")
        } else {
            if (score >= 90) {
                    println("A 학점")
                    if (score >= 95) {
                    println("A+ 장학생 선발 대상")
                }
            } else if (score >= 80) {
                println("B 학점")
            } else if (score >= 70) {
                println("C 학점")
            } else {
                println("F 학점")
            }
        }
        for (i in 10..13) {
            println("$i")
            for (j in 5..10) {
                print("$i * $j = ${i * j}\t")
            }
        }
        println()
    }

            }
