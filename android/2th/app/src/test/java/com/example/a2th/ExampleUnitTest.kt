package com.example.a2th

import android.util.Log
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
        var numTwo = 300000000
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

        println("코틀린 : 정수 자료형 numOne : $numOne",)
        println("코틀린 : 정수 자료형 numTwo : $numTwo")
        println("코틀린 : 정수 자료형 byByte : $byByte")
        println("코틀린 : 정수 자료형 myInt : $myInt")
        println("코틀린 : 실수 자료형 FLoat : " + myFloat)
        println("코틀린 : 실수 자료형 Double : " + myDouble)
        println("코틀린 : 부울린 자료형 Boolean : " + myBoolean)
        println("코틀린 : 문자 자료형  Char : " + myChar1 + myChar2 + myChar3 + myChar4 + myChar5 + myChar6)
        println("코틀린 : 배열 자료형 배열의 3번째 값 : " + myArray[2])
    }
}